import { useEffect, useState } from 'react'
import { useInput } from '../hook/input'
import { useDebounce } from '../hook/debounce'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { postSearch } from '../store/slices/PostsSlice'
import styled from 'styled-components'
import searchIcon from '../assets/svg/search.svg'

const Input = styled.input`
  background: rgba(162, 162, 162, 0.1);
  border: 1px solid rgba(162, 162, 162, 0.6);
  border-radius: 5px;
  padding: 0.4rem;

  max-width: 12rem;

  position: absolute;
  top: -0.2rem;
  right: 2rem;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.45);
  }
  &:focus {
    border: 1px solid #00a3ff;
    box-shadow: none;
    outline: 0;
    outline-offset: 0;
  }

  @media (max-width: 760px) {
    max-width: 7rem;
  }
  @media (max-width: 622px) {
    max-width: 12rem;
    top: 2.8rem;
    right: 0;
  }
`

const SearchContainer = styled.div`
  position: relative;
`

const SearchIcon = styled.img<{ openInput: boolean }>`
  margin-top: 0.2rem;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
  @media (max-width: 622px) {
    /* padding-bottom: 5rem; */
    padding-bottom: ${({ openInput }) => (openInput ? ' 2.8rem' : '0')};
  }
`

function Search() {
  const nameInput = useInput('')
  const debouncedName = useDebounce<string>(nameInput.value)
  const [openInput, setOpenInput] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const { searchPostSave } = useAppSelector((state) => state.posts)

  function toggleSearchHandler() {
    setOpenInput((prev) => !prev)
    nameInput.removeValue()
  }

  useEffect(() => {
    const filteredPosts = searchPostSave.filter((post) =>
      Object.values(post)
        .join(' ')
        .toLowerCase()
        .includes(debouncedName.toLowerCase())
    )

    dispatch(postSearch(filteredPosts))
  }, [dispatch, debouncedName])

  return (
    <SearchContainer>
      <SearchIcon
        openInput={openInput}
        onClick={toggleSearchHandler}
        src={searchIcon}
        alt=' search-icon'
      />

      {openInput && (
        <Input
          type='text'
          placeholder='Search'
          value={nameInput.value}
          onChange={(e) => nameInput.onChange(e)}
        />
      )}
    </SearchContainer>
  )
}

export default Search
