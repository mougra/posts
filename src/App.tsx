import React, { useEffect, useState } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hook/redux'
import { fetchPosts } from './store/actions/postsActions'
import Header from './components/Header'
import Layout from './components/Layout'
import styled from 'styled-components'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <>
      <Header />
      <Layout />
    </>
  )
}

export default App
