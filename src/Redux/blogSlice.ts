import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentPayload {
  id: number;
  comment: string;
}

interface BlogEntry {
  id: number;
  likes: number;
  comments: string[];
}

const initialState: BlogEntry[] = [
  { id: 1, likes: 0, comments: [] },
  { id: 2, likes: 0, comments: [] },
  { id: 3, likes: 0, comments: [] },
];

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    likePost: (state, action: PayloadAction<number>) => {
      const post = state.find((post) => post.id === action.payload);
      if (post) {
        post.likes += 1;
      }
    },
    addComment: (state, action: PayloadAction<CommentPayload>) => {
      const post = state.find((post) => post.id === action.payload.id);
      if (post) {
        post.comments.push(action.payload.comment);
      }
    },
  },
});

export const { likePost, addComment } = blogSlice.actions;

export default blogSlice.reducer;