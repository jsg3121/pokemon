import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Image } from '../../../../components'

interface InfoHeaderContainerProps {
  number: number
  name: string
  evolutions: Array<number>
}

const InfoHeader = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .detail__info--number {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: #777777;
  }

  .detail__info--name {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    margin-bottom: 1.5rem;
  }

  .detail__info--evolution {
    width: 15rem;
    height: 7rem;
    display: flex;
    flex-shrink: 0;

    .info__evolution--image {
      width: 100%;
      height: 6rem;
      display: flex;
      justify-content: space-around;

      & > div {
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`

const InfoHeaderContainer: React.FC<InfoHeaderContainerProps> = (props) => {
  const { evolutions, name, number } = props

  const navigate = useNavigate()

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      const changeNumber = e.currentTarget.getAttribute('data-number')
      navigate(`/detail/${changeNumber}`)
    },
    [navigate]
  )

  return (
    <InfoHeader>
      <div>
        <h1 className="detail__info--number">
          No.
          {number.toString().padStart(5, '0')}
        </h1>
        <p className="detail__info--name">{name}</p>
      </div>
      <div className="detail__info--evolution">
        <div className="info__evolution--image">
          {evolutions.map((item) => {
            return (
              <div key={item} onClick={handleClick} data-number={item}>
                <Image>
                  <img
                    src={`http://43.201.49.91:4000/image/official-artwork/${item}.png`}
                    alt="pokemon_image"
                    loading="lazy"
                  />
                </Image>
              </div>
            )
          })}
        </div>
      </div>
    </InfoHeader>
  )
}

export default InfoHeaderContainer
