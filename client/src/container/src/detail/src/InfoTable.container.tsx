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
  border: 2px solid #333333;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  .table__row {
    width: 100%;
    display: flex;
    align-items: center;

    &:first-child {
      .info__type--title {
        width: clamp(3rem, 100%, 7rem);
        text-align: center;
      }
      .info__type--body {
        width: 100%;
      }
    }
  }

  .type-list__container {
    display: flex;
  }
`

const InfoTableContainer: React.FC<InfoTableContainerProps> = (props) => {
  const { types, region, evolutions } = props
  const relationTypes = useRelationType(types)

  return (
    <InfoTable>
      <div className="table__row">
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
      </div>
      <div className="table__row">
        <TableCell title="강점">
          {relationTypes.half.length > 0 && (
            <TypeList
              list={relationTypes.half}
              title="0.5배의 데미지"
              grade="good"
            />
          )}
          {relationTypes.quarter.length > 0 && (
            <TypeList
              list={relationTypes.quarter}
              title="0.25배의 데미지"
              grade="better"
            />
          )}
          {relationTypes.zero.length > 0 && (
            <TypeList
              list={relationTypes.zero}
              title="데미지 없음"
              grade="best"
            />
          )}
        </TableCell>
      </div>
      <div className="table__row">
        <TableCell title="약점">
          {relationTypes.double.length > 0 && (
            <TypeList
              list={relationTypes.double}
              title="2배의 데미지"
              grade="warning"
            />
          )}
          {relationTypes.quad.length > 0 && (
            <TypeList
              list={relationTypes.quad}
              title="4배의 데미지"
              grade="danger"
            />
          )}
        </TableCell>
      </div>
    </InfoTable>
  )
}

export default InfoTableContainer
