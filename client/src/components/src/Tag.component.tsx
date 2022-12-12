import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface TagComponentProps {
  label: string
  color: `#${string}`
}

const Tag = styled.div<Pick<TagComponentProps, 'color'>>`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.color};
`

const TagComponent: React.FC<TagComponentProps> = (props) => {
  const { label, color } = props

  return <Tag color={color}>{label}</Tag>
}

export default React.memo(TagComponent, isEqual)
