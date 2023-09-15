import { useDispatch, useSelector } from "react-redux";
import { dispatching } from "../app/redux";

export const List = () => {
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();

  return (
    <ol>
      {state.topics.map((x, i) => (
        <li key={i}>
          <a
            onClick={() => {
              dispatch(dispatching.view(x.id));
            }}
            style={{ cursor: "pointer" }}
          >
            {x.title}
          </a>
        </li>
      ))}
    </ol>
  );
};
