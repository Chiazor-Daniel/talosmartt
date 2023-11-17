import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';



const initialState = {
  posts: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state?.posts?.push(action.payload);
    },
  },
});

export const { setPosts, addPost } = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
