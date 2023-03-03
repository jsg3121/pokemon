import { gql, useLazyQuery, useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Pokemon, PokemonMega, PokemonRegion } from '../../graphql'

interface DetailContextProps {
  children: React.ReactNode
}

interface PokemonDetail {
  single: {
    getSinglePokemon: Pokemon
  }
  mega: {
    getMegaEvolution: Array<PokemonMega>
  }
  region: {
    getRegionForm: Array<PokemonRegion>
  }
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

const GET_REGION = gql`
  query GetRegionForm($number: Float!) {
    getRegionForm(number: $number) {
      pokemonId
      region
      type
      pokemonNumber
    }
  }
`
const GET_MEGA = gql`
  query GetMegaEvolution($number: Float!) {
    getMegaEvolution(number: $number) {
      id
      pokemonId
      pokemonNumber
      type
      typeSingle1
      typeSingle2
    }
  }
`

type ContextType = {
  detailInfo?: Pokemon
  regionInfo?: Array<PokemonRegion> | {}
  megaInfo?: Array<PokemonMega> | {}
}

export const DetailContext = React.createContext<ContextType>({})

export const DetailProvider: React.FC<DetailContextProps> = (props) => {
  const { children } = props
  const { number = '' } = useParams()

  const { data: { getSinglePokemon } = {} } = useQuery<PokemonDetail['single']>(
    GET_POKEMON,
    {
      variables: {
        number: parseInt(number, 10),
      },
      fetchPolicy: 'no-cache',
    }
  )

  const [getRegion, { data: { getRegionForm } = { getRegionForm: {} } }] =
    useLazyQuery<PokemonDetail['region']>(GET_REGION)
  const [getMega, { data: { getMegaEvolution } = { getMegaEvolution: {} } }] =
    useLazyQuery<PokemonDetail['mega']>(GET_MEGA)

  const initialValue = {
    detailInfo: getSinglePokemon,
    regionInfo: getRegionForm,
    megaInfo: getMegaEvolution,
  }

  React.useEffect(() => {
    if (getSinglePokemon && getSinglePokemon.isRegion) {
      getRegion({ variables: { number: parseInt(number, 10) } })
    }
  }, [getRegion, getSinglePokemon, number])

  React.useEffect(() => {
    if (getSinglePokemon && getSinglePokemon.isMega) {
      getMega({ variables: { number: parseInt(number, 10) } })
    }
  }, [getMega, getSinglePokemon, number])

  return (
    <DetailContext.Provider value={initialValue}>
      {children}
    </DetailContext.Provider>
  )
}
