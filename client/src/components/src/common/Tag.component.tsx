import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { changeType } from '../../../common'
import { TypesColor } from '../../../types'

interface TagComponentProps {
  label: string
}

const Tag = styled.p<{ color: TypesColor; type: string }>`
  width: 3rem;
  height: 1.25rem;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.color};
  text-align: center;

  & > span {
    width: 100%;
    font-size: 0.75rem;
    text-align: center;
    margin: 0;
    color: #ffffff;
    line-height: 1.8;
  }

  @media screen and (max-width: 475px) {
    width: 1rem;
    height: 1rem;
    background: ${(props) =>
        `url(${process.env.PUBLIC_URL}/assets/${props.type}.svg)`}
      center center/100% no-repeat;

    & > span {
      display: none;
    }
  }
`

const TagComponent: React.FC<TagComponentProps> = (props) => {
  const { label } = props

  const { color, type } = React.useMemo(() => {
    return changeType(label)
  }, [label])

  return (
    <Tag color={color} type={type}>
      <span>{label}</span>
    </Tag>
  )
}

export default React.memo(TagComponent, isEqual)
