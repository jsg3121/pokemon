import React from 'react'
import isEqual from 'fast-deep-equal'

interface FooterComponentProps {}

const FooterComponent: React.FC<FooterComponentProps> = (props) => {
  const {} = props

  return <></>
}

export default React.memo(FooterComponent, isEqual)
