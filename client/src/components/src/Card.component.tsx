import { getIconType } from 'common'
import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { IconColor } from 'types'
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
    } url(${require(`../../assets/image/${props.type}.svg`)}) no-repeat 95% 95%/62%`
  }};

  & > div {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { type, pokemonNumber } = props

  const typeVal = React.useMemo(() => {
    return getIconType(type)
  }, [type])

  return (
    <Card type={typeVal.type} backgroundColor={typeVal.color}>
      <div>
        <h1>No. {pokemonNumber.toString().padStart(3, '0')}</h1>
        <TagComponent label={type} />
      </div>
    </Card>
  )
}

export default React.memo(CardComponent, isEqual)
