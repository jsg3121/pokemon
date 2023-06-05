import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { Button, Image } from '../../../../components'
import { useMobxStore } from '../../../../hook'
import { SortFilter } from '../../dashboard'

interface NoticeContainerProps {
  onClick: () => void
}

const Notice = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1rem;

  .notice__buttons {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .card--icon {
      width: 100%;
      height: 1rem;
      display: flex;
      align-items: center;

      & > div {
        width: 5.5rem;
        height: 1rem;
        display: flex;
        justify-content: flex-end;

        p {
          margin-left: 0.5rem;
          line-height: 1.2;
        }
      }
    }

    button {
      flex-shrink: 0;
      margin-left: 0.5rem;
    }
  }

  @media screen and (min-width: 476px) {
    display: none;
  }
`

const NoticeContainer: React.FC<NoticeContainerProps> = (props) => {
  const { onClick } = props
  const { filter } = useMobxStore()

  const handleFilterOpen = React.useCallback(() => {
    onClick()
  }, [onClick])

  const handleReset = React.useCallback(() => {
    filter.clear()
  }, [filter])

  return (
    <Notice>
      <div className="notice__buttons">
        <div className="card--icon">
          <div>
            <Image>
              <img
                src={require('../../../../assets/image/mega.webp')}
                alt="메가진화_아이콘"
                width="100%"
                height="100%"
              />
            </Image>
            <p>메가진화</p>
          </div>
          <div>
            <Image>
              <img
                src={require('../../../../assets/image/regionForm.webp')}
                alt="리전폼_아이콘"
                width="100%"
                height="100%"
              />
            </Image>
            <p>리전폼</p>
          </div>
        </div>
        <Button label="검색 초기화" buttonType="waring" onClick={handleReset} />
        <Button label="필터" buttonType="default" onClick={handleFilterOpen} />
      </div>
      {window.innerWidth <= 475 && <SortFilter />}
    </Notice>
  )
}

export default React.memo(NoticeContainer, isEqual)
