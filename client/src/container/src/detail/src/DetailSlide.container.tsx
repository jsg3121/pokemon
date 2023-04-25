import isEqual from 'fast-deep-equal'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import { DetailView } from '..'
import { changeColor } from '../../../../common'
import { NextArrow, PrevArrow } from '../../../../components'
import { DetailContext } from '../../../../context'
import {
  Pokemon,
  PokemonMega,
  PokemonNormalForm,
  PokemonRegion,
} from '../../../../graphql'
import { TypesColor } from '../../../../types'

interface DetailSlideContainerProps {
  type: 'normalForm' | 'mega' | 'region'
  setColor: (color: Array<TypesColor>) => void
  detailInfo: Pokemon
}

const DetailSlideContainer: React.FC<DetailSlideContainerProps> = (props) => {
  const { detailInfo, type, setColor } = props
  const {
    megaInfo = [],
    regionInfo = [],
    normalFormInfo = [],
  } = React.useContext(DetailContext)
  const [otherInfo, setOtherInfo] = React.useState<
    Array<PokemonMega> | Array<PokemonRegion> | Array<PokemonNormalForm>
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
    if (regionInfo && type === 'normalForm') {
      setOtherInfo(normalFormInfo)
    }
  }, [megaInfo, normalFormInfo, regionInfo, type])

  return (
    <Slider {...settings}>
      {otherInfo.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <DetailView
              generate={detailInfo.generation}
              number={detailInfo.number}
              evolutions={detailInfo.evolutionId}
              name={
                type === 'normalForm'
                  ? normalFormInfo[index].name
                  : detailInfo.name
              }
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
