import React from 'react'
import styled from 'styled-components'
import { relationType } from '../../../../common'
import { TableCell, Tag } from '../../../../components'

interface InfoTableContainerProps {
  name: string
  types: Array<string>
  generation: number
  evolutions?: Array<number>
  region?: string
}

const InfoTable = styled.div`
  width: 100%;
  height: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 2px solid #333333;
  border-radius: 10px;
  overflow: hidden;

  .cell__item:nth-child(3),
  .cell__item:nth-child(4) {
    grid-column: 1 / 3;
  }
`

const InfoTableContainer: React.FC<InfoTableContainerProps> = (props) => {
  const { name, types, region, evolutions } = props

  React.useEffect(() => {
    relationType(types)
  }, [types])

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
      <TableCell title={`${name}이(가) 강한 타입`}>{}</TableCell>
      <TableCell title={`${name}이(가) 약한 타입`}>{}</TableCell>
    </InfoTable>
  )
}

export default InfoTableContainer
