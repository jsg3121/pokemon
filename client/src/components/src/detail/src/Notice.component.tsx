import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { Image } from '../../common'

const Notice = styled.div`
  display: block;
  grid-column: 1 / 4;
  width: 100%;
  height: 2rem;

  .card--icon {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > div {
      width: 8rem;
      height: 1rem;
      display: flex;
      justify-content: flex-end;
    }
  }
`

const NoticeComponent: React.FC = (props) => {
  return (
    <Notice>
      <div className="card--icon">
        <div>
          <Image>
            <img
              src={require('../../../../assets/image/mega.png')}
              alt="메가진화_아이콘"
            />
          </Image>
          <p>메가진화 아이콘</p>
        </div>
        <div>
          <Image>
            <img
              src={require('../../../../assets/image/regionForm.png')}
              alt="리전폼_아이콘"
            />
          </Image>
          <p>리전폼 아이콘</p>
        </div>
      </div>
    </Notice>
  )
}

export default React.memo(NoticeComponent, isEqual)
