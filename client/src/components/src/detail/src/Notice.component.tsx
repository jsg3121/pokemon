import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { Button, Image } from '../../common'

interface NoticeComponentProps {
  onClick: () => void
}

const Notice = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: flex-start;
  grid-column: 1 / 4;

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

  @media screen and (min-width: 476px) {
    display: none;
  }
`

const NoticeComponent: React.FC<NoticeComponentProps> = (props) => {
  const { onClick } = props

  const handleClick = React.useCallback(() => {
    onClick()
  }, [onClick])

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
          <p>메가진화</p>
        </div>
        <div>
          <Image>
            <img
              src={require('../../../../assets/image/regionForm.png')}
              alt="리전폼_아이콘"
            />
          </Image>
          <p>리전폼</p>
        </div>
      </div>
      <Button label="필터" buttonType="default" onClick={handleClick} />
    </Notice>
  )
}

export default React.memo(NoticeComponent, isEqual)
