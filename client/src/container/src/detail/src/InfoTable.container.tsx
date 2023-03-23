import React from 'react'
import styled from 'styled-components'
import { TableCell, Tag, TypeList } from '../../../../components'
import { useRelationType } from '../../../../hook'

interface InfoTableContainerProps {
  name: string
  types: Array<string>
  generation: number
  evolutions?: Array<number>
  region?: string
}

const InfoTable = styled.div`
  width: 100%;
  height: 14rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 2px solid #333333;
  border-radius: 10px;
  overflow: hidden;

  .cell__item:nth-child(1),
  .cell__item:nth-child(2) {
    height: 3rem;
  }

  .cell__item:nth-child(3),
  .cell__item:nth-child(4) {
    height: 5.5rem;
    grid-column: 1 / 3;

    .type-list__container {
      width: 100%;
      height: 100%;
      display: flex;
    }
  }
`

const InfoTableContainer: React.FC<InfoTableContainerProps> = (props) => {
  const { name, types, region, evolutions } = props
  const relationTypes = useRelationType(types)

  return (
    <InfoTable>
      <TableCell title="타입">
        {types.map((item, index) => {
          return <Tag label={item} key={index} />
        })}
      </TableCell>
      <TableCell title="진화">
        <p>{evolutions === undefined ? '진화 불가능' : '진화 가능'}</p>
      </TableCell>
      {region && (
        <TableCell title="지역">
          <p>{region} 지방</p>
        </TableCell>
      )}
      <TableCell title={`${name}이(가) 강한 타입`}>
        <div className="type-list__container">
          {relationTypes.half.length > 0 && (
            <TypeList
              list={relationTypes.half}
              title="0.5배의 데미지를 받아요"
            />
          )}
          {relationTypes.quarter.length > 0 && (
            <TypeList
              list={relationTypes.quarter}
              title="0.25배의 데미지를 받아요"
            />
          )}
          {relationTypes.zero.length > 0 && (
            <TypeList list={relationTypes.zero} title="데미지를 받지 않아요" />
          )}
        </div>
      </TableCell>
      <TableCell title={`${name}이(가) 약한 타입`}>
        <div className="type-list__container">
          {relationTypes.double.length > 0 && (
            <TypeList
              list={relationTypes.double}
              title="2배의 데미지로 맞아요"
            />
          )}
          {relationTypes.quad.length > 0 && (
            <TypeList list={relationTypes.quad} title="4배의 데미지로 맞아요" />
          )}
        </div>
      </TableCell>
    </InfoTable>
  )
}

export default InfoTableContainer
