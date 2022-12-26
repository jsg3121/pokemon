import { changeType } from 'common'
import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import ImageComponent from './Image.component'
import TagComponent from './Tag.component'

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

  .image--box {
    width: 8rem;
    margin: 0 auto;
  }
`

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { type } = props

  const typeVal = React.useMemo(() => {
    return changeType(type)
  }, [type])

  return (
    <Card>
      <h1>title</h1>
      <div className="image--box">
        <ImageComponent>
          <img src="../../assets/image/bug.svg" alt="asdf" />
        </ImageComponent>
      </div>
      <TagComponent label={type} />
    </Card>
  )
}

export default React.memo(CardComponent, isEqual)
