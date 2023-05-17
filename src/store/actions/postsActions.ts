import { AppDispatch } from '..'
import axios from '../../axios/index'
import { IPost } from '../../models/models'
import { postSlice } from '../slices/PostsSlice'

export const fetchPosts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(postSlice.actions.fetching())
      const responseCharacters = await axios.get<IPost[]>('')
      dispatch(postSlice.actions.fetchSuccess(responseCharacters.data))
    } catch (e) {
      dispatch(postSlice.actions.fetchError(e as Error))
    }
  }
}
