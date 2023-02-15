import isEqual from 'fast-deep-equal'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { Button, Input } from '../../../../components'
import { FilterContext } from '../../../../context'

const Search = styled.div`
  width: 20rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

const SearchContainer: React.FC = observer(() => {
  const [keyword, setKeyword] = React.useState<string>('')

  const { changeFilter } = React.useContext(FilterContext)

  const hadleClick = React.useCallback(() => {
    if (changeFilter) {
      changeFilter({ type: 'name', value: keyword })
    }
  }, [changeFilter, keyword])

  const handleChange = React.useCallback((e: string) => {
    setKeyword(() => e)
  }, [])

  return (
    <Search>
      <Input
        type="text"
        status="default"
        placeholder="포켓몬을 입력하세요"
        onChange={handleChange}
      />
      <Button buttonType="default" label="검색" onClick={hadleClick} />
    </Search>
  )
})

export default React.memo(SearchContainer, isEqual)
