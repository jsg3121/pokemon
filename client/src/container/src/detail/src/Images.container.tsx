import React from 'react'
import isEqual from 'fast-deep-equal'
import { Image, Switch } from '../../../../components'
import styled from 'styled-components'
import { DetailContext } from '../../../../context'

interface ImagesContainerProps {
  index?: number
}

const ImageSwitch = styled.div`
  width: 100%;
  height: 30rem;
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
`

const ImagesContainer: React.FC<ImagesContainerProps> = (props) => {
  const { index } = props
  const { isShiny, otherInfo, detailInfo } = React.useContext(DetailContext)

  const imageCode = React.useMemo(() => {
    if (detailInfo) {
      if (otherInfo === 'normal') {
        return detailInfo.number
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
  }, [detailInfo, index, otherInfo])

  return (
    <ImageSwitch className="detail__image">
      {detailInfo && (
        <>
          {isShiny === true ? (
            <Image>
              <img
                src={`http://43.201.49.91:4000/image/official-artwork/gen${detailInfo.generation}/shiny/${imageCode}.png`}
                alt="shiny_image"
              />
            </Image>
          ) : (
            <Image>
              <img
                src={`http://43.201.49.91:4000/image/official-artwork/gen${detailInfo.generation}/${imageCode}.png`}
                alt="normal_image"
              />
            </Image>
          )}
        </>
      )}
    </ImageSwitch>
  )
}

export default React.memo(ImagesContainer, isEqual)
