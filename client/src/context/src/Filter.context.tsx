import React from 'react'

interface FilterContextProps {
  children: React.ReactNode
}

type ContextType = {
  type: Array<string>
  name: string
  generation: number
  isMega: boolean
  isRegion: boolean
  isEvolution: boolean
}

export const FilterContext = React.createContext<ContextType>({
  type: [],
  name: '',
  generation: 0,
  isMega: false,
  isRegion: false,
  isEvolution: false,
})

export const FilterProvider: React.FC<FilterContextProps> = (props) => {
  const { children } = props

  const initialValue = {
    type: [],
    name: '',
    generation: 0,
    isMega: false,
    isRegion: false,
    isEvolution: false,
  }

  return (
    <FilterContext.Provider value={initialValue}>
      {children}
    </FilterContext.Provider>
  )
}
