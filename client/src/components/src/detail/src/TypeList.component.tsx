import React from 'react'
import isEqual from 'fast-deep-equal'
import { Tag } from '../../common'
import styled from 'styled-components'

interface TypeListComponentProps {
  list: Array<string>
  title: string
}

const TypeList = styled.div`
  width: 100%;
  text-align: center;
  border-right: 1px solid #333333;

  &:last-child {
    border-right: 0;
  }

  .type-list__title {
    height: 2rem;
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }

  .type-list__tag {
    height: calc(100% - 3rem);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`

const TypeListComponent: React.FC<TypeListComponentProps> = (props) => {
  const { list, title } = props

  return (
    <TypeList>
      <p className="type-list__title">{title}</p>
      <div className="type-list__tag">
        {list.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Tag label={item} />
            </React.Fragment>
          )
        })}
      </div>
    </TypeList>
  )
}

export default React.memo(TypeListComponent, isEqual)
