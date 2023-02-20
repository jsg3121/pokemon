import { observer } from 'mobx-react'
import React from 'react'
import { Card } from '../../components'
import { useMobxStore } from '../../hook'

const ListContainer: React.FC = observer(() => {
  const {
    pokemonList: { pokemon },
  } = useMobxStore()

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
              region={item.isRegion ?? undefined}
              mega={item.isMega ?? undefined}
            />
          )
        })}
    </>
  )
})
export default ListContainer
