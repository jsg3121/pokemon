import { observer } from 'mobx-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components'
import { useMobxStore } from '../../hook'

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

  return (
    <>
      {pokemon &&
        pokemon.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              pokemonNumber={item.number}
              type={item.type}
              generate={item.generation}
              region={item.isRegion ?? undefined}
              mega={item.isMega ?? undefined}
              onClick={handleClick}
            />
          )
        })}
    </>
  )
})
export default ListContainer
