import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
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
  region?: string
}

const DetailInfo = styled.div`
  width: 100%;

  @media screen and (max-width: 475px) {
    height: calc(var(--vh, 1vh) * 100 - 7.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const DetailViewContainer: React.FC<DetailViewContainerProps> = (props) => {
  const { index, generate, number, evolutions, name, types, region } = props

  return (
    <DetailInfo>
      <Images index={index} />
      <div className="detail__info--table">
        <InfoHeader
          generate={generate}
          number={number}
          evolutions={evolutions}
          name={name}
        />
        <InfoTable
          name={name}
          generation={generate}
          types={types}
          evolutions={evolutions.length === 0 ? undefined : evolutions}
          region={region}
        />
      </div>
    </DetailInfo>
  )
}

export default React.memo(DetailViewContainer, isEqual)
