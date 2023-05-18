import React, { useEffect, useState } from 'react'
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

  @media (max-width: 576px) {
    /* margin-bottom: 5rem; */
  }
`

function Layout() {
  const { error, loading, posts } = useAppSelector((state) => state.posts)
  console.log(posts)
  return (
    <Wrapper>
      <LayoutCards>
        {posts.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </LayoutCards>
    </Wrapper>
  )
}

export default Layout
