import isEqual from 'fast-deep-equal'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../../container'
import { MobxProvider } from '../../store'
import Dashboard from './Dashboard.route'
import Detail from './Detail.route'

interface RouterProps {}

const Router: React.FC<RouterProps> = (props) => {
  return (
    <BrowserRouter>
      <MobxProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail/:number" element={<Detail />} />
        </Routes>
      </MobxProvider>
    </BrowserRouter>
  )
}

export default React.memo(Router, isEqual)
