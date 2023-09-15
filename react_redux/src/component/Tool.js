import { useDispatch, useSelector } from "react-redux";
import { dispatching } from "../app/redux";

export const Tool = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.state);
  const mode = state.mode;

  return (
    <div>
      {mode !== "create" && (
        <button
          type="button"
          onClick={() => dispatch(dispatching.change_mode("create"))}
        >
          create
        </button>
      )}
      {mode === "read" && state.select_id !== 0 && (
        <button type="button" onClick={() => dispatch(dispatching.delete())}>
          delete
        </button>
      )}
    </div>
  );
};
