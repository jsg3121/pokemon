import { gql, useQuery } from '@apollo/client'
import { observer } from 'mobx-react'
import React from 'react'
import { Pokemon } from '../../graphql/inedex'
import { useMobxStore } from '../../hook'

interface ListProviderProps {
  children: React.ReactNode
}

interface PokemonList {
  getList: Array<Pokemon>
}

type ContextType = {
  pokemonList?: Array<Pokemon>
}

const GET_POKEMON = gql`
  query getList {
    getList {
      id
      number
      name
      type
      isRegion
      isMega
      typeSingle1
      typeSingle2
      isEvolution
      evolutionId
      generation
    }
  }
`

export const ListContext = React.createContext<ContextType>({})

export const ListProvider: React.FC<ListProviderProps> = observer((props) => {
  const { children } = props

  const { data: { getList } = { getList: [] } } =
    useQuery<PokemonList>(GET_POKEMON)

  const { pokemonList } = useMobxStore()

  React.useEffect(() => {
    if (getList) {
      pokemonList.setPokemonList(getList)
    }
  }, [getList, pokemonList])

  const initialValue = {}

  return (
    <ListContext.Provider value={initialValue}>{children}</ListContext.Provider>
  )
})
