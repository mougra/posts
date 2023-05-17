import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../hook/redux'
import Post from '../components/Post'
import styled from 'styled-components'

const LayoutCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  row-gap: 3rem;
  margin-bottom: 10rem;

  @media (max-width: 576px) {
    margin-bottom: 5rem;
  }
`

function Layout() {
  const { error, loading, posts } = useAppSelector((state) => state.posts)
  console.log(posts)
  return (
    <>
      <LayoutCards>
        {posts.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </LayoutCards>
    </>
  )
}

export default Layout
