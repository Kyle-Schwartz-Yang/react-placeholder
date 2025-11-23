import { useAppSelector } from "@shared/hooks/useAppSelector/useAppSelector";
import { useAppDispatch } from "@shared/hooks/useAppDispatch/useAppDispatch";
import { fetchPosts } from "@app/store/posts/thunk";
import css from "./Posts.module.css";

export function Posts() {
  const { posts, loading, error, page, total, limit } = useAppSelector(
    (state) => state.posts
  );

  const dispatch = useAppDispatch();

  const totalPages = Math.ceil(total / limit);

  const handleNext = () => {
    if (page < totalPages) {
      dispatch(fetchPosts(page + 1));
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      dispatch(fetchPosts(page - 1));
    }
  };

  const handleFetch = () => {
    dispatch(fetchPosts());
  };

  return (
    <>
      <button type="button" className={css.button} onClick={handleFetch}>
        FETCH
      </button>

      <div>
        Page {page} / {totalPages}
      </div>

      <div className={css.pagination}>
        <button
          type="button"
          onClick={handlePrev}
          disabled={page === 1 || loading}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={page === totalPages || loading}
        >
          Next
        </button>
      </div>

      <div className={css.items}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className={css.error}>{error}</div>
        ) : (
          <ul className={css.list}>
            {posts.map((item) => (
              <li className={css.item} key={item.id}>
                {item.id}: {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
