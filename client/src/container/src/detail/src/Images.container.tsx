import React from 'react'
import isEqual from 'fast-deep-equal'
import { Image } from '../../../../components'
import styled from 'styled-components'
import { DetailContext } from '../../../../context'
import { imageMode } from '../../../../common'

interface ImagesContainerProps {
  index?: number
  normalFormPath?: number
}

const ImageSwitch = styled.div`
  width: 100%;
  height: calc(55% - 1rem);
  margin-top: 1rem;

  .image__switch {
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 475px) {
    height: 40%;
  }
`

const ImagesContainer: React.FC<ImagesContainerProps> = (props) => {
  const { index = 0 } = props
  const { isShiny, otherInfo, detailInfo, normalFormInfo } =
    React.useContext(DetailContext)

  const imageCode = React.useMemo(() => {
    if (detailInfo) {
      if (otherInfo === 'normal') {
        if (normalFormInfo && normalFormInfo.length > 0) {
          return normalFormInfo[index].imagePath
        } else {
          return detailInfo.number
        }
      } else if (otherInfo === 'mega') {
        return parseInt(
          `1${detailInfo.number.toString().padStart(3, '0')}${index
            ?.toString()
            .padStart(2, '0')}`,
          10
        )
      } else {
        return parseInt(
          `2${detailInfo.number.toString().padStart(3, '0')}${index
            ?.toString()
            .padStart(2, '0')}`,
          10
        )
      }
    } else {
      return 0
    }
  }, [detailInfo, index, normalFormInfo, otherInfo])

  return (
    <ImageSwitch className="detail__image">
      {detailInfo && (
        <>
          {isShiny === true ? (
            <Image>
              <img
                src={`${imageMode}/shiny/${imageCode}.webp`}
                alt="shiny_image"
              />
            </Image>
          ) : (
            <Image>
              <img src={`${imageMode}/${imageCode}.webp`} alt="normal_image" />
            </Image>
          )}
        </>
      )}
    </ImageSwitch>
  )
}

export default React.memo(ImagesContainer, isEqual)
