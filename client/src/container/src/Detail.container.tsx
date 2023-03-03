import React from 'react'
import isEqual from 'fast-deep-equal'
import { DetailContext } from '../../context'

const DetailContainer: React.FC = () => {
  const { detailInfo, megaInfo, regionInfo } = React.useContext(DetailContext)

  return (
    <>
      {detailInfo && (
        <>
          <h1>{detailInfo.name}</h1>
          <h1>{detailInfo.number}</h1>
          <h1>{detailInfo.isMega}</h1>
          <h1>{detailInfo.typeSingle1}</h1>
          <h1>{detailInfo.typeSingle2}</h1>
        </>
      )}
    </>
  )
}

export default React.memo(DetailContainer, isEqual)
