import { observer } from 'mobx-react'
import React from 'react'
import { useMobxStore } from '../../hook'

interface SettingContextProps {
  children: React.ReactNode
}

type ContextType = {
  isSave?: boolean
  changeOptions?: (val: boolean) => void
  saveSetting?: () => void
  cancelSetting?: () => void
}

export const SettingContext = React.createContext<ContextType>({})

export const SettingProvider: React.FC<SettingContextProps> = observer(
  (props) => {
    const { children } = props
    const [isSave, setIsSave] = React.useState<boolean>(true)
    const { filter } = useMobxStore()

    const changeOptions = React.useCallback((val: boolean) => {
      setIsSave(() => val)
    }, [])

    const saveSetting = React.useCallback(() => {
      filter.changeSetting(isSave)
    }, [filter, isSave])

    const cancelSetting = React.useCallback(() => {
      setIsSave(filter.isSave)
    }, [filter.isSave])

    React.useEffect(() => {
      setIsSave(filter.isSave)
    }, [filter.isSave])

    const initialValue = {
      changeOptions,
      saveSetting,
      cancelSetting,
      isSave,
    }

    return (
      <SettingContext.Provider value={initialValue}>
        {children}
      </SettingContext.Provider>
    )
  }
)
