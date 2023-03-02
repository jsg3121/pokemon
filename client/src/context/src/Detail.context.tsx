import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Pokemon } from '../../graphql'

interface DetailContextProps {
  children: React.ReactNode
}

interface PokemonDetail {
  getSinglePokemon: Pokemon
}

const GET_POKEMON = gql`
  query GetPokemonFilter($number: Float!) {
    getSinglePokemon(number: $number) {
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

type ContextType = {
  detailInfo?: Pokemon
}

export const DetailContext = React.createContext<ContextType>({})

export const DetailProvider: React.FC<DetailContextProps> = (props) => {
  const { children } = props
  const { number = '' } = useParams()

  const { data: { getSinglePokemon } = {} } = useQuery<PokemonDetail>(
    GET_POKEMON,
    {
      variables: {
        number: parseInt(number, 10),
      },
      fetchPolicy: 'no-cache',
    }
  )

  const initialValue = {
    detailInfo: getSinglePokemon,
  }

  return (
    <DetailContext.Provider value={initialValue}>
      {children}
    </DetailContext.Provider>
  )
}
