import React from 'react'
import isEqual from 'fast-deep-equal'

interface ImageComponentProps {
  children: React.ReactNode
}

const ImageComponent: React.FC<ImageComponentProps> = (props) => {
  const { children } = props

  return (
    <picture>
      <figure>{children}</figure>
    </picture>
  )
}

export default React.memo(ImageComponent, isEqual)
