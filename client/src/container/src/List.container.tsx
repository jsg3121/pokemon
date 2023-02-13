import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Card } from '../../components'
import { Pokemon } from '../../graphql/inedex'

interface PokemonList {
  getList: Array<Pokemon>
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

const ListContainer: React.FC = () => {
  const { data: { getList } = { getList: [] } } =
    useQuery<PokemonList>(GET_POKEMON)

  React.useEffect(() => {
    if (getList) {
      console.log(getList)
    }
  }, [getList])

  return (
    <>
      {getList &&
        getList.map((item) => {
          return (
            <Card
              key={item.number}
              name={item.name}
              pokemonNumber={item.number}
              type={item.type}
              region={item.isRegion ?? undefined}
              mega={item.isMega ?? undefined}
            />
          )
        })}
    </>
  )
}

export default ListContainer
