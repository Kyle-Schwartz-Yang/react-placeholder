import { ACTION } from "./posts.constants";

export type PostItem = {
  id: number;
  title: string;
};

export type StatePosts = {
  posts: PostItem[];
  loading: boolean;
  error: string | null;
  page: number;
  total: number;
  limit: number;
};

type FetchPostRequest = { type: typeof ACTION.FETCH_POSTS };
type FetchPostSuccess = {
  type: typeof ACTION.FETCH_POSTS_SUCCESS;
  payload: { posts: PostItem[]; total: number; page: number };
};
type FetchPostError = {
  type: typeof ACTION.FETCH_POSTS_ERROR;
  payload: string;
};
type DeletePost = { type: typeof ACTION.DELETE_POST; payload: number };

export type PostsAction =
  | FetchPostRequest
  | FetchPostSuccess
  | FetchPostError
  | DeletePost;
