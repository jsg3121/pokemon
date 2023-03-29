import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

type FeatureItem = {
  title: string
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '업데이트',
    Svg: require('@site/static/img/bulbasaur.svg').default,
    description: (
      <>
        <p>업데이트 내용과 앞으로의 일정이 궁금하시다면</p>
        <Link className="button button--secondary button--lg" to="/update">
          업데이트 바로가기
        </Link>
      </>
    ),
  },
  {
    title: '도감 사이트 이용 안내',
    Svg: require('@site/static/img/charmander.svg').default,
    description: (
      <>
        <p>사이트의 이용 방법이 궁금하시다면</p>
        <Link className="button button--secondary button--lg" to="/docs">
          사용안내 바로가기
        </Link>
      </>
    ),
  },
  {
    title: '블로그',
    Svg: require('@site/static/img/squirtle.svg').default,
    description: (
      <>
        <p>도감 사이트의 개발 과정 및 관련 기술을 알고 싶으시다면</p>
        <Link className="button button--secondary button--lg" to="/blog">
          블로그 바로가기
        </Link>
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
