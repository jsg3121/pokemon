import React from 'react'
import isEqual from 'fast-deep-equal'
import { DetailProvider } from '../../context'
import { Detail } from '../../container'

const DetailRoute: React.FC = () => {
  return (
    <DetailProvider>
      <Detail />
    </DetailProvider>
  )
}

export default React.memo(DetailRoute, isEqual)
