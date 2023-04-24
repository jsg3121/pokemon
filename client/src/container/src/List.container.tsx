import { observer } from 'mobx-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { VirtuosoGrid } from 'react-virtuoso'
import styled from 'styled-components'
import { Card, NoData } from '../../components'
import { Pokemon } from '../../graphql'
import { useMobxStore } from '../../hook'

interface PokemonCardContainerProps {
  onClick: (number: number) => void
  data: Pokemon
}

const List = styled.div`
  width: 100%;
  height: 100%;

  .virtuoso-grid-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, auto));
    grid-column-gap: 1rem;
    justify-items: center;

    @media screen and (max-width: 475px) {
      grid-template-columns: repeat(3, auto);
      grid-column-gap: 0;
      justify-content: space-between;
      justify-items: flex-start;
    }
  }

  @media screen and (max-width: 475px) {
    padding: 0 1rem;
  }
`

const PokemonCard = styled.div`
  padding: 1rem 0;

  @media screen and (max-width: 475px) {
    padding: 0.5rem 0;
  }
`

const PokemonCardContainer: React.FC<PokemonCardContainerProps> = (props) => {
  const { data, onClick } = props

  const handleClick = React.useCallback(
    (number: number) => {
      onClick(number)
    },
    [onClick]
  )

  return (
    <PokemonCard>
      <Card
        name={data.name}
        pokemonNumber={data.number}
        type={data.type}
        generate={data.generation}
        region={data.isRegion ?? undefined}
        mega={data.isMega ?? undefined}
        onClick={handleClick}
      />
    </PokemonCard>
  )
}

const ListContainer: React.FC = observer(() => {
  const {
    pokemonList: { pokemon },
  } = useMobxStore()

  const navigate = useNavigate()

  const handleClick = React.useCallback(
    (number: number) => {
      navigate(`/detail/${number}`)
    },
    [navigate]
  )

  const cardList = React.useMemo(() => {
    return (
      <VirtuosoGrid
        totalCount={pokemon.length}
        itemContent={(index) => (
          <PokemonCardContainer data={pokemon[index]} onClick={handleClick} />
        )}
      />
    )
  }, [handleClick, pokemon])

  return <List>{pokemon.length === 0 ? <NoData /> : cardList}</List>
})
export default ListContainer
