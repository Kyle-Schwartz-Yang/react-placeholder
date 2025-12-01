import type { StatePosts, PostsAction } from "./posts.types";
import { ACTION } from "./posts.constants";

const initialState: StatePosts = {
  posts: [],
  loading: false,
  error: null,
  page: 1,
  total: 0,
  limit: 25,
};

export function postsReducer(state = initialState, action: PostsAction) {
  switch (action.type) {
    case ACTION.FETCH_POSTS:
      return { ...state, loading: true };
    case ACTION.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
        total: action.payload.total,
        page: action.payload.page,
      };
    case ACTION.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
}
