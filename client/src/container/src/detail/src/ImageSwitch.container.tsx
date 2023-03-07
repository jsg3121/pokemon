import React from 'react'
import isEqual from 'fast-deep-equal'
import { Image, Switch } from '../../../../components'
import styled from 'styled-components'

interface ImageSwitchContainerProps {
  number: number
  generate: number
}

const ImageSwitch = styled.div`
  width: 100%;

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

const ImageSwitchContainer: React.FC<ImageSwitchContainerProps> = (props) => {
  const { number, generate } = props
  const [shiny, setShiny] = React.useState<boolean>(false)

  const handleChange = React.useCallback(
    (data: { name: string; value: boolean }) => {
      setShiny(data.value)
    },
    []
  )

  return (
    <ImageSwitch className="detail__image">
      <div className="image__switch">
        <p>이로치</p>
        <Switch name="detail_image" onChange={handleChange} />
      </div>
      {shiny === true ? (
        <Image>
          <img
            src={`http://43.201.49.91:4000/image/official-artwork/gen${generate}/shiny/${number}.png`}
            alt="shiny_image"
          />
        </Image>
      ) : (
        <Image>
          <img
            src={`http://43.201.49.91:4000/image/official-artwork/gen${generate}/${number}.png`}
            alt="normal_image"
          />
        </Image>
      )}
    </ImageSwitch>
  )
}

export default React.memo(ImageSwitchContainer, isEqual)
