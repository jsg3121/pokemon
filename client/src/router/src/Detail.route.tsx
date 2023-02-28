import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'

const Detail = styled.section``

const DetailRoute: React.FC = () => {
  return <Detail>dddddddd</Detail>
}

export default React.memo(DetailRoute, isEqual)
