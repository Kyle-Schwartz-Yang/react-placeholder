import type { PostItem } from "./posts.types";
import { ACTION } from "./posts.constants";

export const FetchPostRequest = () => ({ type: ACTION.FETCH_POSTS });
export const FetchPostSuccess = (
  posts: PostItem[],
  total: number,
  page: number
) => ({
  type: ACTION.FETCH_POSTS_SUCCESS,
  payload: { posts, total, page },
});

export const FetchPostError = (errorMessage: string) => ({
  type: ACTION.FETCH_POSTS_ERROR,
  payload: errorMessage,
});

export const DeletePost = (id: number) => ({
  type: ACTION.DELETE_POST,
  payload: id,
});
