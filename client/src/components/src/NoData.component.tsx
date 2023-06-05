import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { Image } from './common'

interface NoDataComponentProps {}

const NoData = styled.section`
  width: 100%;
  height: 100%;
  position: relative;

  .no-data__image {
    width: 20rem;
    height: 20rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    img {
      filter: drop-shadow(3px 4px 3px #999999);
    }

    h1 {
      font-size: 1.3rem;
      font-weight: 500;
      margin-top: 1rem;
    }
  }
`

const NoDataComponent: React.FC<NoDataComponentProps> = (props) => {
  return (
    <NoData>
      <div className="no-data__image">
        <Image>
          <img
            src={require('../../assets/image/noData.webp')}
            alt="no_data"
            width="100%"
            height="100%"
          />
        </Image>
        <h1>검색 조건에 맞는 포켓몬이 없어요!</h1>
      </div>
    </NoData>
  )
}

export default React.memo(NoDataComponent, isEqual)
