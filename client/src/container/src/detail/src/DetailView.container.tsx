import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import {
  FormStats,
  MegaStats,
  NormalStats,
  RegionStats,
} from '../../../../graphql'
import Images from './Images.container'
import InfoHeader from './InfoHeader.container'
import InfoTable from './InfoTable.container'

interface DetailViewContainerProps {
  name: string
  generate: number
  number: number
  evolutions: Array<number>
  types: Array<string>
  stats: NormalStats | FormStats | RegionStats | MegaStats
  index?: number
  region?: string
}

const DetailInfo = styled.div`
  height: calc(100% - 2rem);
  width: 100%;

  .detail__info--table {
    height: 45%;
  }

  @media screen and (max-width: 475px) {
    height: calc(var(--vh, 1vh) * 100 - 7.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .detail__info--table {
      height: 60%;
    }
  }
`

const DetailViewContainer: React.FC<DetailViewContainerProps> = (props) => {
  const { index, generate, number, evolutions, name, types, region, stats } =
    props

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
          stats={stats}
        />
      </div>
    </DetailInfo>
  )
}

export default React.memo(DetailViewContainer, isEqual)
