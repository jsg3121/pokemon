import { gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Card } from './components'
import { Home } from './container'
import { Pokemon } from './graphql/inedex'

const Main = styled.main`
  width: 720px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

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

function App() {
  const { data: { getList } = { getList: [] } } =
    useQuery<PokemonList>(GET_POKEMON)

  useEffect(() => {
    if (getList) {
      console.log(getList)
    }
  }, [getList])

  return (
    <Main className="App">
      {getList &&
        getList.map((item) => {
          return (
            <Card
              key={item.number}
              name={item.name}
              pokemonNumber={item.number}
              type={item.type}
            />
          )
        })}
    </Main>
  )
}

export default App
