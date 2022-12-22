import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import ImageComponent from './Image.component'
import { ReactComponent as Bug } from '../../assets/image/bug.svg'

interface CardComponentProps {
  listNumber: number
  description: string
  name: string
  type: string
}

const Card = styled.article`
  width: 14rem;
  height: 20rem;
  border: 1px solid #cccccc;
  border-radius: 1rem;
`

const CardComponent: React.FC<CardComponentProps> = (props) => {
  return (
    <Card>
      <h1>title</h1>
      <ImageComponent>
        <Bug fill="red" />
      </ImageComponent>
    </Card>
  )
}

export default React.memo(CardComponent, isEqual)
