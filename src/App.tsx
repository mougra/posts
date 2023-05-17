import React, { useEffect, useState } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hook/redux'
import { fetchPosts } from './store/actions/postsActions'
import Header from './components/Header'
import Layout from './components/Layout'
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

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <>
      <Wrapper>
        <Header />
        <Layout />
      </Wrapper>
    </>
  )
}

export default App
