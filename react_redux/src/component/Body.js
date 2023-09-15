import { useSelector } from "react-redux";

export const Body = () => {
  const state = useSelector((state) => state.state);

  let title = "",
    desc = "";
  if (state.select_id === 0) {
    title = "Welcome!";
    desc = "Select topic to read.";
  } else {
    for (let i = 0; i < state.topics.length; i++) {
      const topic = state.topics[i];
      if (topic.id === state.select_id) {
        title = topic.title;
        desc = topic.desc;
        break;
      }
    }
  }

  return (
    <section>
      <h2>{title}</h2>
      <p>{desc}</p>
    </section>
  );
};
