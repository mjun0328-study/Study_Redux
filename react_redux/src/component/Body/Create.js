import { useState } from "react";
import { useDispatch } from "react-redux";
import { dispatching } from "../../app/redux";

export const Create = ({ state }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  return (
    <section>
      <p>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </p>
      <p>
        <button
          type="button"
          onClick={() =>
            dispatch(dispatching.create({ title: title, desc: desc }))
          }
        >
          Create Topic
        </button>
      </p>
    </section>
  );
};
