import { api } from "@shared/api";
import type { Dispatch } from "redux";
import type { PostsAction } from "./reducer";
import type { RootState } from "../index";

export function fetchPosts(page = 1) {
  return async (dispatch: Dispatch<PostsAction>, getState: () => RootState) => {
    try {
      dispatch({ type: "FETCH_POSTS" });
      const { limit } = getState().posts;
      const data = await api.getPosts(page, limit);

      setTimeout(() => {
        dispatch({
          type: "FETCH_POSTS_SUCCESS",
          payload: { posts: data.posts, total: data.total, page },
        });
      }, 1000);
    } catch (error) {
      dispatch({ type: "FETCH_POSTS_ERROR", payload: "ERROR FETCH POSTS" });
    }
  };
}

export const deletePost = (id: number) => ({
  type: "DELETE_POST",
  payload: id,
});
