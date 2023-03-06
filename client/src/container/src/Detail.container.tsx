import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { DetailContext } from '../../context'
import { ImageSwitch, InfoHeader, InfoTable } from './detail'

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
`

const DetailContainer: React.FC = () => {
  const { detailInfo, megaInfo, regionInfo } = React.useContext(DetailContext)

  return (
    <Detail>
      <DetailInfo>
        {detailInfo && (
          <>
            <ImageSwitch number={detailInfo.number} />
            <InfoHeader
              number={detailInfo.number}
              evolutions={detailInfo.evolutionId}
              name={detailInfo.name}
            />
            <InfoTable
              generation={detailInfo.generation}
              types={detailInfo.type}
              evolutions={
                detailInfo.evolutionId.length === 0
                  ? undefined
                  : detailInfo.evolutionId
              }
            />
          </>
        )}
      </DetailInfo>
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
