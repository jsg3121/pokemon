import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components';

interface TagComponentProps{
  label: string

}

const Tag = styled.div<TagComponentProps>`
width: 1rem;
height: 1rem;
background-color: ${(props)=> props.label};
`

const TagComponent:React.FC<TagComponentProps> = (props)=> {
  const {label} = props

  return (<Tag label={label}>{label}</Tag>)
}

export default React.memo(TagComponent, isEqual)