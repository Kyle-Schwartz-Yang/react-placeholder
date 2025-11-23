type PostItem = {
  id: number;
  title: string;
};

type StatePosts = {
  posts: PostItem[];
  loading: boolean;
  error: string | null;
  page: number;
  total: number;
  limit: number;
};

export const ACTION = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR: "FETCH_POSTS_ERROR",
  DELETE_POST: "DELETE_POST",
} as const;

export type PostsAction =
  | { type: typeof ACTION.FETCH_POSTS }
  | {
      type: typeof ACTION.FETCH_POSTS_SUCCESS;
      payload: { posts: PostItem[]; total: number; page: number };
    }
  | { type: typeof ACTION.FETCH_POSTS_ERROR; payload: string }
  | { type: typeof ACTION.DELETE_POST; payload: number };
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
