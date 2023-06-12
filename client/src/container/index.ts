import React from 'react'

export * from './src/detail'
export * from './src/filter'

export const List = React.lazy(() => import('./src/List.container'))
export const Filter = React.lazy(() => import('./src/Filter.container'))
export const Loading = React.lazy(() => import('./src/Loading.container'))
export const Header = React.lazy(() => import('./src/Header.container'))
export const Detail = React.lazy(() => import('./src/Detail.container'))
