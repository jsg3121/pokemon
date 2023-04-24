import React from 'react'
import isEqual from 'fast-deep-equal'
import { Tag } from '../../common'
import styled from 'styled-components'

interface TypeListComponentProps {
  list: Array<string>
  title: string
  grade: 'best' | 'better' | 'good' | 'warning' | 'danger'
}

const TypeList = styled.div<{ grade: TypeListComponentProps['grade'] }>`
  width: 100%;
  height: 100%;
  text-align: center;
  border-right: 1px solid #333333;

  &:last-child {
    border-right: 0;
  }

  .type-list__title {
    height: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    background-color: ${(props) => {
      switch (props.grade) {
        case 'best':
          return '#6af073'
        case 'better':
          return '#5ce9ff'
        case 'good':
          return '#59a0f5'
        case 'warning':
          return '#f9bd3d'
        case 'danger':
          return '#ff5f42'
      }
    }};
    margin-bottom: 0.5rem;

    @media screen and (max-width: 475px) {
      letter-spacing: -0.75px;
    }
  }

  .type-list__tag {
    height: calc(100% - 2.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    p {
      margin: 0 0.25rem;
    }
  }
`

const TypeListComponent: React.FC<TypeListComponentProps> = (props) => {
  const { list, title, grade } = props

  return (
    <TypeList grade={grade}>
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
