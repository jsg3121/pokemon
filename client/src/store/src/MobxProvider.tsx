import React from 'react'
import isEqual from 'fast-deep-equal'
import { RootStore } from './rootStore'
import { Provider } from 'mobx-react'

interface MobxProviderProps {
  children: React.ReactNode
}

const store = new RootStore()

const MobxProvider: React.FC<MobxProviderProps> = (props) => {
  const { children } = props

  return <Provider {...store}>{children}</Provider>
}

export default React.memo(MobxProvider, isEqual)
