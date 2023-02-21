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

  .filter__name--title {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #333333;
  }

  button {
    margin-left: 1rem;
  }
`

const SearchContainer: React.FC = observer(() => {
  const { filter, changeFilter } = React.useContext(FilterContext)
  const [keyword, setKeyword] = useDebounce()

  const handleChange = React.useCallback(
    (str: string) => {
      setKeyword(str)
    },
    [setKeyword]
  )

  React.useEffect(() => {
    if (changeFilter) {
      changeFilter({ type: 'name', value: keyword })
    }
  }, [changeFilter, keyword])

  return (
    <Search>
      <p className="filter__name--title">Name</p>
      <Input
        type="text"
        status="default"
        placeholder="포켓몬을 입력하세요"
        onChange={handleChange}
        defaultValue={filter?.name}
      />
    </Search>
  )
})

export default React.memo(SearchContainer, isEqual)
