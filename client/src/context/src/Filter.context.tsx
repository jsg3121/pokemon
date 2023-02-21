import { gql, useQuery } from '@apollo/client'
import { observer } from 'mobx-react'
import React from 'react'
import { variablesCheck } from '../../common'
import { Pokemon } from '../../graphql/inedex'
import { useMobxStore } from '../../hook'
import { FilterStore } from '../../store'

interface FilterContextProps {
  children: React.ReactNode
}

interface PokemonList {
  getPokemonFilter: Array<Pokemon>
}

type ContextType = {
  filter?: FilterStore
  changeFilter?: (data: { type: keyof FilterStore; value: string }) => void
}

const FILTER_POKEMON = gql`
  query GetPokemonFilter(
    $type: [String!]
    $isMega: Boolean
    $isRegion: Boolean
    $isEvolution: Boolean
    $name: String
    $generation: [String!]
  ) {
    getPokemonFilter(
      type: $type
      isMega: $isMega
      isRegion: $isRegion
      isEvolution: $isEvolution
      name: $name
      generation: $generation
    ) {
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

export const FilterContext = React.createContext<ContextType>({})

export const FilterProvider: React.FC<FilterContextProps> = observer(
  (props) => {
    const { children } = props
    const { filter } = useMobxStore()
    const { pokemonList } = useMobxStore()

    const { data: { getPokemonFilter } = { getPokemonFilter: [] } } =
      useQuery<PokemonList>(FILTER_POKEMON, {
        variables: {
          ...variablesCheck({ ...filter }),
        },
        fetchPolicy: 'no-cache',
      })

    const changeFilter = React.useCallback(
      (data: { type: keyof FilterStore; value: string }) => {
        filter.changeFilter(data)
      },
      [filter]
    )

    const initialValue = {
      changeFilter,
      filter,
    }

    React.useEffect(() => {
      pokemonList.setPokemonList(getPokemonFilter)
    }, [getPokemonFilter, pokemonList])

    return (
      <FilterContext.Provider value={initialValue}>
        {children}
      </FilterContext.Provider>
    )
  }
)
