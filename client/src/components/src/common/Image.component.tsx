import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface ImageComponentProps {
  children: React.ReactNode
}

const Picture = styled.picture`
  text-align: center;

  figure {
    width: 100%;
    height: 100%;

    img {
      height: 100%;
      margin: 0 auto;
    }
  }
`

const ImageComponent: React.FC<ImageComponentProps> = (props) => {
  const { children } = props

  return (
    <Picture>
      <figure>{children}</figure>
    </Picture>
  )
}

export default React.memo(ImageComponent, isEqual)
