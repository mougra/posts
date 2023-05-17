import axios from 'axios'

const cors_api_host = 'https://api.allorigins.win/raw?url='

export default axios.create({
  baseURL: cors_api_host + process.env.REACT_APP_BASE_URL,
})
