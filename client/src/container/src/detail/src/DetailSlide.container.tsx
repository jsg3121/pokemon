import React from 'react'
import isEqual from 'fast-deep-equal'
import Slider, { Settings } from 'react-slick'
import { NextArrow, PrevArrow } from '../../../../components'
import { changeColor } from '../../../../common'
import { TypesColor } from '../../../../types'
import { DetailContext } from '../../../../context'
import { DetailView } from '..'
import { Pokemon, PokemonMega, PokemonRegion } from '../../../../graphql'

interface DetailSlideContainerProps {
  type: 'normal' | 'mega' | 'region'
  setColor: (color: Array<TypesColor>) => void
  detailInfo: Pokemon
}

const DetailSlideContainer: React.FC<DetailSlideContainerProps> = (props) => {
  const { detailInfo, type, setColor } = props
  const { megaInfo = [], regionInfo = [] } = React.useContext(DetailContext)
  const [otherInfo, setOtherInfo] = React.useState<
    Array<PokemonMega> | Array<PokemonRegion>
  >([])

  const settings = React.useMemo<Settings>(() => {
    return {
      className: 'detail__slide',
      dots: false,
      speed: 0,
      infinite: false,
      draggable: false,
      touchMove: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      afterChange(currentSlide) {
        const types = changeColor(otherInfo[currentSlide].type)
        setColor(types)
      },
    }
  }, [otherInfo, setColor])

  React.useEffect(() => {
    if (megaInfo && type === 'mega') {
      setOtherInfo(megaInfo)
    }
    if (regionInfo && type === 'region') {
      setOtherInfo(regionInfo)
    }
  }, [megaInfo, regionInfo, type])

  return (
    <Slider {...settings}>
      {otherInfo.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <DetailView
              generate={detailInfo.generation}
              number={detailInfo.number}
              evolutions={detailInfo.evolutionId}
              name={detailInfo.name}
              types={item.type}
              index={index}
              region={type === 'region' ? regionInfo[index].region : undefined}
            />
          </React.Fragment>
        )
      })}
    </Slider>
  )
}

export default React.memo(DetailSlideContainer, isEqual)
