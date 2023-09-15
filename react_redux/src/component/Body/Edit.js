import { useState } from "react";
import { useDispatch } from "react-redux";
import { dispatching } from "../../app/redux";

export const Edit = ({ state }) => {
  const dispatch = useDispatch();

  let payload = false;
  if (state.mode === "update") {
    for (let i = 0; i < state.topics.length; i++) {
      const topic = state.topics[i];
      if (topic.id === state.select_id) {
        payload = topic;
        break;
      }
    }
  }

  const [title, setTitle] = useState(payload ? payload.title : "");
  const [desc, setDesc] = useState(payload ? payload.desc : "");

  return (
    <section>
      <p>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </p>
      <p>
        <textarea
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></textarea>
      </p>
      <p>
        <button
          type="button"
          onClick={() =>
            dispatch(
              state.mode === "create"
                ? dispatching.create({ title: title, desc: desc })
                : dispatching.update({ title: title, desc: desc })
            )
          }
        >
          {state.mode === "create" ? "Create" : "Update"} Topic
        </button>
      </p>
    </section>
  );
};
