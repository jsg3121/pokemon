import isEqual from 'fast-deep-equal'
import React from 'react'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import { DetailContext } from '../../context'
import { Images, InfoHeader, InfoTable, Switchs } from './detail'

const Detail = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem;
`

const DetailInfo = styled.article`
  width: clamp(20rem, 50vw, 60rem);
  height: 100%;
  margin: 0 auto;
  position: relative;
`

const settings: Settings = {
  dots: false,
  speed: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const DetailContainer: React.FC = () => {
  const { detailInfo, otherInfo, megaInfo } = React.useContext(DetailContext)

  return (
    <Detail>
      <DetailInfo>
        <Switchs />
        {detailInfo && (
          <>
            {otherInfo === 'normal' && <Images />}
            {otherInfo === 'mega' && megaInfo && (
              <>
                {megaInfo.map((list, index) => {
                  return <Images index={index} />
                })}
              </>
            )}
            <InfoTable
              generation={detailInfo.generation}
              types={detailInfo.type}
              evolutions={
                detailInfo.evolutionId.length === 0
                  ? undefined
                  : detailInfo.evolutionId
              }
            />
            <InfoHeader
              generate={detailInfo.generation}
              number={detailInfo.number}
              evolutions={detailInfo.evolutionId}
              name={detailInfo.name}
            />
          </>
        )}
      </DetailInfo>
    </Detail>
  )
}

export default React.memo(DetailContainer, isEqual)
