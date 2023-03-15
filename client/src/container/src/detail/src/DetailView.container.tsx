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
}

const DetailInfo = styled.div`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 475px) {
    height: calc(100vh - 7.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const DetailViewContainer: React.FC<DetailViewContainerProps> = (props) => {
  const { index, generate, number, evolutions, name, types } = props

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
          generation={generate}
          types={types}
          evolutions={evolutions.length === 0 ? undefined : evolutions}
        />
      </div>
    </DetailInfo>
  )
}

export default React.memo(DetailViewContainer, isEqual)
