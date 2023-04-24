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
    border-top: 0.2rem solid #333333;
    border-right: 0.2rem solid #333333;
    transform: rotate(45deg);
  }

  @media screen and (max-width: 475px) {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 0;
    z-index: 100;

    &::before {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: -0.5rem;
    }
  }
`

const NextArrowComponent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return <Arrow {...props} />
}

export default React.memo(NextArrowComponent, isEqual)
