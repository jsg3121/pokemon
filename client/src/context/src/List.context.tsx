import { observer } from 'mobx-react'
import React from 'react'
import { Loading } from '../../container'
import { Pokemon } from '../../graphql'
import { useMobxStore } from '../../hook'

interface ListProviderProps {
  children: React.ReactNode
}

type ContextType = {
  pokemonList?: Array<Pokemon>
}

export const ListContext = React.createContext<ContextType>({})

export const ListProvider: React.FC<ListProviderProps> = observer((props) => {
  const { children } = props
  const { pokemonList } = useMobxStore()

  const initialValue = {}

  return (
    <ListContext.Provider value={initialValue}>
      {!pokemonList.isLoading ? <>{children}</> : <Loading />}
    </ListContext.Provider>
  )
})
