import axios from "axios";

export const api = {
  getUsers: async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      return response.data;
    } catch (error) {
      console.error("ERROR FETCH USERS", error);
      // return [];
      throw error; // ❌ кидаємо далі, щоб Redux Thunk зловив
    }
  },

  getPosts: async (page = 1, limit = 5) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        { params: { _page: page, _limit: limit } }
      );
      return {
        posts: response.data,
        total: Number(response.headers["x-total-count"]),
      };
    } catch (error) {
      console.error("ERROR FETCH POSTS", error);
      throw error;
    }
  },
};
