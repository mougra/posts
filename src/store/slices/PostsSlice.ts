import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../models/models'

interface CharacterState {
  loading: boolean
  error: string
  posts: IPost[]
  searchPostSave: IPost[]
}

const initialState: CharacterState = {
  loading: false,
  error: '',
  posts: [],
  searchPostSave: [],
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
      state.searchPostSave = action.payload
      state.error = ''
    },
    // SearchPosts(state, action: PayloadAction<IPost[]>) {
    //   state.loading = false
    //   state.posts = action.payload
    //   state.error = ''
    // },
    postSearch(state: any, action: PayloadAction<IPost[]>) {
      state.posts = action.payload
    },
    // deleteRow(state: any, action: PayloadAction<deletePayload>) {
    //   state.rows.splice(action.payload.i, action.payload.count)
    // },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
  },
})

export default postSlice.reducer
export const { postSearch } = postSlice.actions
