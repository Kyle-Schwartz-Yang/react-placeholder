import type { ThunkAction } from "@reduxjs/toolkit";
import type { PostsAction } from "./posts.types";
import type { RootState } from "../index";
import { api } from "@shared/api";
import {
  FetchPostRequest,
  FetchPostSuccess,
  FetchPostError,
} from "./posts.actions";

export function fetchPosts(
  page = 1
): ThunkAction<Promise<void>, RootState, unknown, PostsAction> {
  return async (dispatch, getState) => {
    try {
      dispatch(FetchPostRequest());
      const { limit } = getState().posts;
      const data = await api.getPosts(page, limit);

      setTimeout(() => {
        dispatch(FetchPostSuccess(data.posts, data.total, page));
      }, 1000);
    } catch (error) {
      dispatch(FetchPostError("Failed to fetch posts"));
    }
  };
}

export const deletePost = (id: number) => ({
  type: "DELETE_POST",
  payload: id,
});
