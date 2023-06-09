import isEqual from 'fast-deep-equal'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { imageMode } from '../../../../common'
import { Image } from '../../../../components'
import { DetailContext } from '../../../../context'

interface InfoHeaderContainerProps {
  number: number
  name: string
  generate: number
  evolutions: Array<number>
}

const InfoHeader = styled.div<{ fontSize: number }>`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

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

    @media screen and (min-width: 381px) and (max-width: 475px) {
      width: 100%;
      height: 2rem;
      font-size: ${(props) => {
        const { fontSize } = props
        if (fontSize <= 10) {
          return '2rem'
        } else if (fontSize === 11) {
          return '1.75rem'
        } else {
          return '1.6rem'
        }
      }};
      line-height: 2rem;
    }

    @media screen and (max-width: 380px) {
      width: 100%;
      height: 2rem;
      font-size: ${(props) => {
        const { fontSize } = props
        if (fontSize <= 8) {
          return '2rem'
        } else if (fontSize > 8 && fontSize <= 10) {
          return '1.5rem'
        } else if (fontSize === 11) {
          return '1.35rem'
        } else {
          return '1.2rem'
        }
      }};
      line-height: 2rem;
    }
  }

  .detail__info--title {
    flex-shrink: 0;

    @media screen and (max-width: 475px) {
      height: 5rem;
      width: calc(60vw);
    }
  }

  .detail__info--evolution {
    min-width: 10rem;
    max-width: 25rem;
    height: 6.6rem;
    overflow-x: auto;
    overflow-y: hidden;
    flex-shrink: 0;

    .info__evolution--image {
      width: 100%;
      height: 6rem;
      display: flex;

      & > div {
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
        }
      }

      @media screen and (max-width: 475px) {
        height: 4.5rem;
        margin-top: 0.5rem;
      }
    }

    /* total width */
    &::-webkit-scrollbar {
      height: 0.35rem;
    }

    /* scrollbar itself */
    &::-webkit-scrollbar-thumb {
      background-color: #898989;
      border-radius: 1rem;
      border: 3px solid transparent;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #898989;
      border: 3px solid transparent;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }

    @media screen and (max-width: 475px) {
      height: 5rem;
      min-width: 6rem;
      max-width: calc(45vw - 3rem);
      margin-bottom: 0;
    }
  }
`

const InfoHeaderContainer: React.FC<InfoHeaderContainerProps> = (props) => {
  const { evolutions, name, number } = props
  const { resetMode } = React.useContext(DetailContext)

  const navigate = useNavigate()

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      const changeNumber = e.currentTarget.getAttribute('data-number')
      if (resetMode) {
        resetMode()
      }
      navigate(`/detail/${changeNumber}`)
    },
    [navigate, resetMode]
  )

  return (
    <InfoHeader fontSize={name.length}>
      <div className="detail__info--title">
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
                    src={`${imageMode}/${item}.webp`}
                    alt="pokemon_image"
                    width="100%"
                    height="100%"
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

export default React.memo(InfoHeaderContainer, isEqual)
