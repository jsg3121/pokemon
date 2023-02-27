import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import { ReactComponent as Pika } from '../../assets/image/pikachu.svg'
import { ReactComponent as Pie } from '../../assets/image/charmander.svg'
import { ReactComponent as GGobu } from '../../assets/image/squirtle.svg'
import { ReactComponent as EEvee } from '../../assets/image/eevee.svg'
import { ReactComponent as Isang } from '../../assets/image/bulbasaur.svg'

const Loading = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  .loading__image {
    width: 15rem;
    height: 11rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    p {
      width: 100%;
      margin-top: 0.4rem;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
`

const LoaingImageList: Array<React.ReactNode> = [
  <Pika />,
  <GGobu />,
  <Pie />,
  <EEvee />,
  <Isang />,
]

const LoadingContainer: React.FC = () => {
  const [number, setNumber] = React.useState<number>(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setNumber((value) => {
        if (value === 4) {
          return 0
        } else {
          return (value += 1)
        }
      })
    }, 250)

    return () => {
      return clearInterval(interval)
    }
  }, [])

  return (
    <Loading>
      <div className="loading__image">
        {LoaingImageList[number]}
        <p>
          데이터를 가져오고 있어요
          {new Array(number).fill('').map((_, index) => (
            <React.Fragment key={index}>.</React.Fragment>
          ))}
        </p>
      </div>
    </Loading>
  )
}

export default React.memo(LoadingContainer, isEqual)
