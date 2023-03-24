import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

interface TableCellComponentProps {
  children: React.ReactNode
  title: string
}

const TableCell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .info__type--title {
    width: 7rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    flex-shrink: 0;
    padding: 0 0.5rem;
    border-right: 1px solid #333333;
    border-bottom: 1px solid #333333;
  }

  .info__type--body {
    width: calc(100% - 7rem);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border-right: 1px solid #333333;
    border-bottom: 1px solid #333333;

    & > p {
      margin-right: 0.8rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`

const TableCellComponent: React.FC<TableCellComponentProps> = (props) => {
  const { children, title } = props

  return (
    <TableCell className="cell__item">
      <p className="info__type--title">{title}</p>
      <div className="info__type--body">{children}</div>
    </TableCell>
  )
}

export default React.memo(TableCellComponent, isEqual)
