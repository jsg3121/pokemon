import React from 'react'
import isEqual from 'fast-deep-equal'

interface BallComponentProps {}

const BallComponent: React.FC<BallComponentProps> = (props) => {
  return <></>
}

export default React.memo(BallComponent, isEqual)
