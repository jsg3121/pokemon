import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { changeColor } from '../../common'
import { DetailContext } from '../../context'
import { TypesColor } from '../../types'
import Loading from './Loading.container'
import { DetailSlide, DetailView, Switchs } from './detail'

const Detail = styled.section<{ backgroundColor: Array<TypesColor> }>`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: ${(props) => {
    if (props.backgroundColor.length === 1) {
      return `${props.backgroundColor[0]}66`
    } else {
      return `linear-gradient(
              135deg,
              ${props.backgroundColor[0]}88 35%,
              ${props.backgroundColor[1]}88 65%
            )`
    }
  }};

  @media screen and (max-width: 475px) {
    padding: 1rem;
  }
`

const DetailInfo = styled.article`
  width: clamp(20rem, 80vw, 60rem);
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

const DetailContainer: React.FC = () => {
  const {
    detailInfo,
    otherInfo,
    megaInfo,
    regionInfo,
    isLoading,
    normalFormInfo,
  } = React.useContext(DetailContext)
  const [color, setColor] = React.useState<Array<TypesColor>>([])

  const handleClick = React.useCallback(
    (val?: string) => {
      if (val === 'mega' && megaInfo) {
        const types = changeColor(megaInfo[0].type)
        setColor(types)
      } else if (val === 'region' && regionInfo) {
        const types = changeColor(regionInfo[0].type)
        setColor(types)
      } else if (val === 'normal') {
        if (detailInfo) {
          const newColor = changeColor(detailInfo.type)
          setColor(newColor)
        }
      }
    },
    [detailInfo, megaInfo, regionInfo]
  )

  const handleColor = React.useCallback((color: Array<TypesColor>) => {
    setColor(color)
  }, [])

  React.useEffect(() => {
    if (detailInfo) {
      const newColor = changeColor(detailInfo.type)
      setColor(newColor)
    }
  }, [detailInfo])

  return (
    <Detail backgroundColor={color}>
      {isLoading ? (
        <Loading />
      ) : (
        <DetailInfo>
          <Switchs onClick={handleClick} />
          {detailInfo && (
            <>
              {otherInfo === 'normal' && (
                <>
                  {normalFormInfo && normalFormInfo.length > 0 ? (
                    <DetailSlide
                      detailInfo={detailInfo}
                      setColor={handleColor}
                      type="normalForm"
                    />
                  ) : (
                    <DetailView
                      generate={detailInfo.generation}
                      number={detailInfo.number}
                      evolutions={detailInfo.evolutionId}
                      name={detailInfo.name}
                      types={detailInfo.type}
                    />
                  )}
                </>
              )}
              {otherInfo === 'mega' && (
                <DetailSlide
                  detailInfo={detailInfo}
                  setColor={handleColor}
                  type="mega"
                />
              )}
              {otherInfo === 'region' && (
                <DetailSlide
                  detailInfo={detailInfo}
                  setColor={handleColor}
                  type="region"
                />
              )}
            </>
          )}
        </DetailInfo>
      )}
    </Detail>
  )
}

export default React.memo(DetailContainer, isEqual)
