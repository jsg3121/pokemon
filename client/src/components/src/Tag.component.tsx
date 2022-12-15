import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { changeType } from '../../common'
import { TypesColor } from '../../types'

interface TagComponentProps {
  label: string
}

const Tag = styled.div<{ color: TypesColor }>`
  min-width: 1.5rem;
  height: 0.75rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.color};

  p {
    font-size: 0.75rem;
    margin: 0;
    height: 100%;
  }
`

const TagComponent: React.FC<TagComponentProps> = (props) => {
  const { label } = props

  const { color, type } = React.useMemo(() => {
    return changeType(label)
  }, [label])

  return (
    <Tag color={color}>
      <p>{type}</p>
    </Tag>
  )
}

export default React.memo(TagComponent, isEqual)
