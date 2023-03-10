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
    border-right: 0.2rem solid #888888;
    transform: rotate(45deg);
  }
`

const NextArrowComponent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return <Arrow {...props} />
}

export default React.memo(NextArrowComponent, isEqual)
