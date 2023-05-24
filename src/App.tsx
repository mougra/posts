import React, { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from './hook/redux'
import { fetchPosts } from './store/actions/postsActions'
import Header from './components/Header'
import Layout from './components/Layout'

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
