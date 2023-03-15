import React from 'react'
import isEqual from 'fast-deep-equal'
import { DetailProvider } from '../../context'
import { Detail } from '../../container'
import styled from 'styled-components'

const DetailPage = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 5rem;

  @media screen and (max-width: 475px) {
    padding-top: 3.5rem;
  }
`

const DetailRoute: React.FC = () => {
  return (
    <DetailPage>
      <DetailProvider>
        <Detail />
      </DetailProvider>
    </DetailPage>
  )
}

export default React.memo(DetailRoute, isEqual)
