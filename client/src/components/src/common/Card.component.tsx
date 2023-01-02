import { getIconType } from 'common'
import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { IconColor } from 'types'
import ImageComponent from './Image.component'
import TagComponent from './Tag.component'

interface CardComponentProps {
  pokemonNumber: number
  description: string
  name: string
  type: string
}

const Card = styled.article<{ type: string; backgroundColor: IconColor }>`
  width: 14rem;
  height: 20rem;
  border: 1px solid #cccccc;
  border-radius: 1rem;
  padding: 1rem;
  background: ${(props) => {
    return `${
      props.backgroundColor
    } url(${require(`../../../assets/image/${props.type}.svg`)}) no-repeat 95% 95%/62%`
  }};
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(4px);
    border-radius: 1rem;
    z-index: -1;
  }

  .card--info {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .image--container {
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
  const { type, pokemonNumber, name } = props

  const typeVal = React.useMemo(() => {
    return getIconType(type)
  }, [type])

  return (
    <Card type={typeVal.type} backgroundColor={typeVal.color}>
      <div className="card--info">
        <h1>No. {pokemonNumber.toString().padStart(3, '0')}</h1>
        <TagComponent label={type} />
      </div>
      <ImageComponent>
        <img
          src={`http://localhost:4000/image/${pokemonNumber}.png`}
          alt="pokemon_image"
        />
      </ImageComponent>
      <div className="card--name">
        <h1>{name}</h1>
      </div>
    </Card>
  )
}

export default React.memo(CardComponent, isEqual)
