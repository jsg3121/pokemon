import React from 'react'
import isEqual from 'fast-deep-equal'
import { ReactComponent as GitHub } from '../../../../assets/image/github.svg'
import { ReactComponent as Blog } from '../../../../assets/image/blog.svg'
import styled from 'styled-components'

const Links = styled.div`
  width: 6rem;
  height: 100%;

  .detail__button--link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    width: 100%;
    height: 100%;
    font-size: 0;
  }

  @media screen and (max-width: 475px) {
    width: 4.75rem;
  }
`

const LinksContainer: React.FC = () => {
  return (
    <Links>
      <div className="detail__button--link">
        <div className="button__link--github">
          <a
            href="https://github.com/jsg3121/pokemon"
            target="_blank"
            rel="noreferrer">
            GitHub
            <GitHub />
          </a>
        </div>
        <div className="button__link--docs">
          <a href="http://43.201.49.91:3001" target="_blank" rel="noreferrer">
            blog
            <Blog />
          </a>
        </div>
      </div>
    </Links>
  )
}

export default React.memo(LinksContainer, isEqual)
