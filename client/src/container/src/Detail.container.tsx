import isEqual from 'fast-deep-equal'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import styled from 'styled-components'
import { NextArrow, PrevArrow } from '../../components'
import { DetailContext } from '../../context'
import { DetailView, Switchs } from './detail'

const Detail = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem;

  @media screen and (max-width: 475px) {
    padding: 1rem;
  }
`

const DetailInfo = styled.article`
  width: clamp(20rem, 50vw, 60rem);
  height: 100%;
  margin: 0 auto;
  position: relative;

  .detail__slide {
    height: auto;
  }

  @media screen and (max-width: 475px) {
    width: 100%;
  }
`

const settings: Settings = {
  className: 'detail__slide',
  dots: false,
  speed: 0,
  infinite: false,
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
            {otherInfo === 'normal' && (
              <DetailView
                generate={detailInfo.generation}
                number={detailInfo.number}
                evolutions={detailInfo.evolutionId}
                name={detailInfo.name}
                types={detailInfo.type}
              />
            )}
            {otherInfo === 'mega' && megaInfo && (
              <Slider {...settings}>
                {megaInfo.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <DetailView
                        generate={detailInfo.generation}
                        number={detailInfo.number}
                        evolutions={detailInfo.evolutionId}
                        name={detailInfo.name}
                        types={item.type}
                        index={index}
                      />
                    </React.Fragment>
                  )
                })}
              </Slider>
            )}
            {otherInfo === 'region' && regionInfo && (
              <Slider {...settings}>
                {regionInfo.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <DetailView
                        generate={detailInfo.generation}
                        number={detailInfo.number}
                        evolutions={detailInfo.evolutionId}
                        name={detailInfo.name}
                        types={item.type}
                        index={index}
                        region={item.region}
                      />
                    </React.Fragment>
                  )
                })}
              </Slider>
            )}
          </>
        )}
      </DetailInfo>
    </Detail>
  )
}

export default React.memo(DetailContainer, isEqual)
