import isEqual from 'fast-deep-equal'
import React from 'react'
import Images from './Images.container'
import InfoHeader from './InfoHeader.container'
import InfoTable from './InfoTable.container'

interface DetailViewContainerProps {
  name: string
  generate: number
  number: number
  evolutions: Array<number>
  types: Array<string>
  index?: number
}

const DetailViewContainer: React.FC<DetailViewContainerProps> = (props) => {
  const { index, generate, number, evolutions, name, types } = props

  return (
    <>
      <Images index={index} />
      <InfoHeader
        generate={generate}
        number={number}
        evolutions={evolutions}
        name={name}
      />
      <InfoTable
        generation={generate}
        types={types}
        evolutions={evolutions.length === 0 ? undefined : evolutions}
      />
    </>
  )
}

export default React.memo(DetailViewContainer, isEqual)
