import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

const Arrow = styled.div`
  width: 2rem;
  height: 2rem;

  &::before {
    content: '';
    width: 2rem;
    height: 2rem;
    display: block;
    border-top: 0.2rem solid #888888;
    border-left: 0.2rem solid #888888;
    transform: rotate(-45deg);
  }
`

const PrevArrowComponent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return <Arrow {...props} />
}

export default React.memo(PrevArrowComponent, isEqual)
