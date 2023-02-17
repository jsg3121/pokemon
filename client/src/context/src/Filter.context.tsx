import { observer } from 'mobx-react'
import React from 'react'
import { useMobxStore } from '../../hook'
import { FilterStore } from '../../store'

interface FilterContextProps {
  children: React.ReactNode
}

type ContextType = {
  filter?: FilterStore
  changeFilter?: (data: {
    type: keyof FilterStore
    value: string | number | boolean
  }) => void
}

export const FilterContext = React.createContext<ContextType>({})

export const FilterProvider: React.FC<FilterContextProps> = observer(
  (props) => {
    const { children } = props
    const { filter } = useMobxStore()

    const changeFilter = React.useCallback(
      (data: { type: keyof FilterStore; value: string | number | boolean }) => {
        filter.changeFilter(data)
      },
      [filter]
    )

    const initialValue = {
      changeFilter,
      filter,
    }

    React.useEffect(() => {}, [filter])

    return (
      <FilterContext.Provider value={initialValue}>
        {children}
      </FilterContext.Provider>
    )
  }
)
