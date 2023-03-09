import isEqual from 'fast-deep-equal'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import styled from 'styled-components'
import { NextArrow, PrevArrow } from '../../components'
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
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  fade: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const DetailContainer: React.FC = () => {
  const { detailInfo, otherInfo, megaInfo, regionInfo } =
    React.useContext(DetailContext)

  return (
    <Detail>
      <DetailInfo>
        <Switchs />
        {detailInfo && (
          <>
            {otherInfo === 'normal' && <Images />}
            {otherInfo === 'mega' && megaInfo && (
              <Slider {...settings}>
                {megaInfo.map((_, index) => {
                  return <Images index={index} key={index} />
                })}
              </Slider>
            )}
            {otherInfo === 'region' && regionInfo && (
              <Slider {...settings}>
                {regionInfo.map((_, index) => {
                  return <Images index={index} key={index} />
                })}
              </Slider>
            )}
            <InfoHeader
              generate={detailInfo.generation}
              number={detailInfo.number}
              evolutions={detailInfo.evolutionId}
              name={detailInfo.name}
            />
            <InfoTable
              generation={detailInfo.generation}
              types={detailInfo.type}
              evolutions={
                detailInfo.evolutionId.length === 0
                  ? undefined
                  : detailInfo.evolutionId
              }
            />
          </>
        )}
      </DetailInfo>
    </Detail>
  )
}

export default React.memo(DetailContainer, isEqual)
