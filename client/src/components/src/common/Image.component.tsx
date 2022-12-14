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
    }
  }
`

const ImageComponent: React.FC<ImageComponentProps> = (props) => {
  const { children } = props

  return (
    <div className="image--container">
      <Picture>
        <figure>{children}</figure>
      </Picture>
    </div>
  )
}

export default React.memo(ImageComponent, isEqual)
