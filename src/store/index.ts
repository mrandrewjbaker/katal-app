import { configureStore } from '@reduxjs/toolkit'
import sideMenuReducer from '../components/SideMenu/sideMenu.slice'

const store = configureStore({
  reducer: {
    SideMenu: sideMenuReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch

export default store;