import { Read } from "./Body/Read";
import { Edit } from "./Body/Edit";
import { useSelector } from "react-redux";

export const Body = () => {
  const state = useSelector((state) => state.state);

  switch (state.mode) {
    case "read":
      return <Read state={state} />;
    case "create":
      return <Edit state={state} />;
    case "update":
      return <Edit state={state} />;
  }
};
