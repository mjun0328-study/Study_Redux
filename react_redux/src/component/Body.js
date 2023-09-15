import { Read } from "./Body/Read";
import { Create } from "./Body/Create";
import { useSelector } from "react-redux";

export const Body = () => {
  const state = useSelector((state) => state.state);

  switch (state.mode) {
    case "read":
      return <Read state={state} />;
    case "create":
      return <Create state={state} />;
  }
};
