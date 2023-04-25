import { observer } from 'mobx-react'
import React from 'react'
import { useMobxStore } from '../../hook'

interface SettingContextProps {
  children: React.ReactNode
}

type ContextType = {
  changeOptions?: (val: boolean) => void
}

export const SettingContext = React.createContext<ContextType>({})

export const SettingProvider: React.FC<SettingContextProps> = observer(
  (props) => {
    const { children } = props
    const { filter } = useMobxStore()

    const changeOptions = React.useCallback(
      (val: boolean) => {
        filter.changeSetting(val)
      },
      [filter]
    )

    const initialValue = {
      changeOptions,
    }

    return (
      <SettingContext.Provider value={initialValue}>
        {children}
      </SettingContext.Provider>
    )
  }
)
