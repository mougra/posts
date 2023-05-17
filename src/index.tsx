import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { setupStore } from './store/index'
import { Provider } from 'react-redux'
import { Normalize } from 'styled-normalize'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <App />
    </Provider>
  </React.StrictMode>
)
