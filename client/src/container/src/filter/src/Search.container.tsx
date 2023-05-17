import isEqual from 'fast-deep-equal'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { Input } from '../../../../components'
import { FilterContext } from '../../../../context'
import { useDebounce } from '../../../../hook'

const Search = styled.div`
  width: 100%;
  padding: 1rem;

  button {
    margin-left: 1rem;
  }
`

const SearchContainer: React.FC = observer(() => {
  const { filter, changeFilter } = React.useContext(FilterContext)
  const [keyword, setKeyword] = useDebounce()

  const handleChange = React.useCallback(
    (str: string) => {
      if (str === '' && changeFilter) {
        changeFilter({ type: 'name', value: '' })
      }
      setKeyword(str.trim())
    },
    [changeFilter, setKeyword]
  )

  React.useEffect(() => {
    if (changeFilter && keyword) {
      if (Number.isNaN(parseInt(keyword, 10))) {
        changeFilter({ type: 'name', value: keyword })
      } else {
        changeFilter({ type: 'pokemonNumber', value: keyword })
      }
    }
  }, [changeFilter, filter, keyword])

  return (
    <Search>
      <p className="filter__content--title">Name</p>
      <Input
        type="text"
        status="default"
        placeholder="이름, 전국도감 번호"
        onChange={handleChange}
        defaultValue={filter?.keyword}
      />
    </Search>
  )
})

export default React.memo(SearchContainer, isEqual)
