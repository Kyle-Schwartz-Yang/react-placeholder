import { bindActionCreators } from "redux";
import { useAppDispatch } from "../useAppDispatch/useAppDispatch";
import { fetchUsers } from "@app/store/users/thunks";

// Хук для зв'язування action creators з dispatch
export const useActionsCreators = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators({ fetchUsers }, dispatch);
};
