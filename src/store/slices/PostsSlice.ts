import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../models/models'

interface CharacterState {
  loading: boolean
  error: string
  posts: IPost[]
}

const initialState: CharacterState = {
  loading: false,
  error: '',
  posts: [],
}

export const postSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchSuccess(state, action: PayloadAction<IPost[]>) {
      state.loading = false
      state.posts = action.payload
      state.error = ''
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
  },
})

export default postSlice.reducer
