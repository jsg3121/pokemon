import { observer } from 'mobx-react'
import React from 'react'
import { Pokemon } from '../../graphql/inedex'

interface ListProviderProps {
  children: React.ReactNode
}

type ContextType = {
  pokemonList?: Array<Pokemon>
}

export const ListContext = React.createContext<ContextType>({})

export const ListProvider: React.FC<ListProviderProps> = observer((props) => {
  const { children } = props

  const initialValue = {}

  return (
    <ListContext.Provider value={initialValue}>{children}</ListContext.Provider>
  )
})
