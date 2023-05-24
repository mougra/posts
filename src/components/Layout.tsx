import React from 'react'
import { useAppSelector } from '../hook/redux'
import Post from '../components/Post'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 0.625rem;
  @media (max-width: 992px) {
    padding: 0 1.25rem;
  }
  @media (max-width: 576px) {
    padding: 0 0.75rem;
  }
`

const LayoutCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  row-gap: 3rem;
  margin-bottom: 5rem;
`

function Layout() {
  const { error, loading, posts } = useAppSelector((state) => state.posts)

  return (
    <Wrapper>
      {loading && <p className='text-center text-lg'>Loading...</p>}
      {error && (
        <p className='text-center text-lg text-red-600'>
          Усп. Кажется кажетсячто-то пошло не так. Только без паники!
        </p>
      )}
      {!error && (
        <>
          <LayoutCards>
            {posts.map((post) => (
              <Post key={post.title} post={post} />
            ))}
          </LayoutCards>
          <div id='posts__section'></div>
        </>
      )}
    </Wrapper>
  )
}

export default Layout
