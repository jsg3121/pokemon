import React from 'react'
import styled from 'styled-components'
import { TableCell, Tag } from '../../../../components'

interface InfoTableContainerProps {
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
`

const InfoTableContainer: React.FC<InfoTableContainerProps> = (props) => {
  const { types, region, evolutions } = props

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
      <TableCell title="약점 타입">{}</TableCell>
      <TableCell title="강점 타입">{}</TableCell>
    </InfoTable>
  )
}

export default InfoTableContainer
