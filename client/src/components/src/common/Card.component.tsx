import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { changeType, imageMode } from '../../../common'
import { TypesColor } from '../../../types'
import Image from './Image.component'
import Tag from './Tag.component'

interface CardComponentProps {
  pokemonNumber: number
  generate: number
  name: string
  type: Array<string>
  region?: boolean
  mega?: boolean
  onClick?: (number: number) => void
}

const Card = styled.article<{ backgroundColor: Array<TypesColor> }>`
  width: 14rem;
  height: 20rem;
  border: 1px solid #cccccc;
  border-radius: 1rem;
  padding: 1rem;
  position: relative;
  z-index: 1;
  background: ${(props) => {
    if (props.backgroundColor.length === 1) {
      return `${props.backgroundColor[0]}66`
    } else {
      return `linear-gradient(
              135deg,
              ${props.backgroundColor[0]}66 35%,
              ${props.backgroundColor[1]}66 65%
            )`
    }
  }};
  transition: transform 0.2s;
  will-change: transform;

  @media screen and (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.05);
    }
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
          margin-left: 0.2rem;
        }
      }

      @media screen and (max-width: 475px) {
        justify-content: right;
        align-self: flex-start;

        h1 {
          display: none;
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

    @media screen and (max-width: 475px) {
      width: 100%;
      height: 70%;
      margin: 0 auto;
    }
  }

  .card--name {
    width: 100%;
    text-align: center;
    margin-top: 1.3rem;

    h1 {
      font-size: 1.7rem;
      font-weight: 500;
    }

    @media screen and (max-width: 475px) {
      width: auto;
      max-width: 5rem;
      margin-top: 0.7rem;
      margin-left: 0.6rem;
      position: absolute;
      top: 0;
      left: 0;

      h1 {
        font-size: 0.9rem;
        text-align: left;
      }
    }
  }

  @media screen and (max-width: 475px) {
    width: calc(33vw - 1rem);
    height: clamp(10rem, 40vw, 14rem);
    padding: 0.6rem;
  }
`

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { type, pokemonNumber, name, mega, region, onClick } = props

  const backgroundColor = React.useMemo(() => {
    const background: Array<TypesColor> = []
    type.map((item) => {
      return background.push(changeType(item).color)
    })
    return background
  }, [type])

  const handleClick = React.useCallback(() => {
    if (onClick) {
      onClick(pokemonNumber)
    }
  }, [onClick, pokemonNumber])

  return (
    <Card backgroundColor={backgroundColor} onClick={handleClick}>
      <div className="card--info">
        <div className="card--tag">
          <h1>No. {pokemonNumber.toString().padStart(3, '0')}</h1>
          <div className="card--type">
            {type.map((item, index) => {
              return <Tag label={item} key={index} />
            })}
          </div>
        </div>
        {(mega || region) && (
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
        )}
      </div>
      <div className="card--image__pokemon">
        <Image>
          <img
            src={`${imageMode}/${pokemonNumber}.png`}
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
