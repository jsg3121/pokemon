import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { Tag } from '../../components'
import { DetailContext } from '../../context'
import { ImageSwitch } from './detail'

const Detail = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
`

const DetailInfo = styled.article`
  width: clamp(20rem, 50vw, 60rem);
  height: 100%;
  margin: 0 auto;

  .detail__info--number {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: #777777;
  }

  ul {
    .detail__info--type {
      width: 7rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .detail__info--name {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      margin-bottom: 0.5rem;
    }
  }
`

const DetailContainer: React.FC = () => {
  const { detailInfo, megaInfo, regionInfo } = React.useContext(DetailContext)

  return (
    <Detail>
      {detailInfo && (
        <DetailInfo>
          <h1 className="detail__info--number">
            No.{detailInfo.number.toString().padStart(5, '0')}
          </h1>
          <ImageSwitch number={detailInfo.number} />
          <ul>
            <li>
              <p className="detail__info--name">{detailInfo.name}</p>
            </li>
            <li className="detail__info--type">
              {detailInfo.type.map((item, index) => {
                return <Tag label={item} key={index} />
              })}
            </li>
          </ul>
        </DetailInfo>
      )}
      {/* 
      <h1>메가</h1>
      {megaInfo &&
        megaInfo.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <p>{item.pokemonNumber}</p>
              <p>{item.type}</p>
            </React.Fragment>
          )
        })}
      <h1>리전</h1>
      {regionInfo &&
        regionInfo.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <p>{item.type}</p>
              <p>{item.region}</p>
            </React.Fragment>
          )
        })} */}
    </Detail>
  )
}

export default React.memo(DetailContainer, isEqual)
