import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { changeType } from '../../common'
import { TypesColor } from '../../types'

interface TagComponentProps {
  label: string
}

const Tag = styled.p<{ color: TypesColor }>`
  width: 3rem;
  height: 1.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;

  & > span {
    width: 100%;
    font-size: 0.75rem;
    text-align: center;
    margin: 0;
    color: #ffffff;
    line-height: 1.2;
  }
`

const TagComponent: React.FC<TagComponentProps> = (props) => {
  const { label } = props

  const { color, type } = React.useMemo(() => {
    return changeType(label)
  }, [label])

  return (
    <Tag color={color}>
      <span>{type}</span>
    </Tag>
  )
}

export default React.memo(TagComponent, isEqual)
