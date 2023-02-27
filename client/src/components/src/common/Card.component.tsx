import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { getIconType } from '../../../common'
import { IconColor } from '../../../types'
import Image from './Image.component'
import Tag from './Tag.component'

interface CardComponentProps {
  pokemonNumber: number
  name: string
  type: Array<string>
  region?: boolean
  mega?: boolean
}

const Card = styled.article<{ type: string; backgroundColor: IconColor }>`
  width: 14rem;
  height: 20rem;
  border: 1px solid #cccccc;
  border-radius: 1rem;
  padding: 1rem;
  position: relative;
  z-index: 1;
  background-color: #ffffff;
  transition: transform 0.2s;
  will-change: transform;

  &:hover {
    transform: scale(1.1);
  }

  .card--info {
    width: 100%;
    height: 2.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .card--tag {
      width: 100%;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .card--type {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & p:last-child {
          margin-left: 0.5rem;
        }
      }
    }

    .card--icon {
      width: 2.5rem;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      flex-shrink: 0;
    }
  }

  .card--image__pokemon {
    width: 11rem;
    height: 10rem;
    margin: 2rem auto 0;
  }

  .card--name {
    width: 100%;
    text-align: center;
    margin-top: 1.3rem;

    h1 {
      font-size: 1.7rem;
      font-weight: 500;
    }
  }
`

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { type, pokemonNumber, name, mega, region } = props

  const typeVal = React.useMemo(() => {
    return getIconType(type[0])
  }, [type])

  return (
    <Card type={typeVal.type} backgroundColor={typeVal.color}>
      <div className="card--info">
        <div className="card--tag">
          <h1>No. {pokemonNumber.toString().padStart(3, '0')}</h1>
          <div className="card--type">
            {type.map((item, index) => {
              return <Tag label={item} key={index} />
            })}
          </div>
        </div>
        <div className="card--icon">
          {mega && (
            <Image>
              <img
                src={require('../../../assets/image/mega.png')}
                alt="메가진화_아이콘"
              />
            </Image>
          )}
          {region && (
            <Image>
              <img
                src={require('../../../assets/image/regionForm.png')}
                alt="리전폼_아이콘"
              />
            </Image>
          )}
        </div>
      </div>
      <div className="card--image__pokemon">
        <Image>
          <img
            // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`}
            src={`http://localhost:4000/image/${pokemonNumber}.png`}
            alt="pokemon_image"
            loading="lazy"
          />
        </Image>
      </div>
      <div className="card--name">
        <h1>{name}</h1>
      </div>
    </Card>
  )
}

export default React.memo(CardComponent, isEqual)
