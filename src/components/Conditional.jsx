import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

const reducerFunc = function (state, action) {
  switch (action.type) {
    case "update":
  }
};

const Conditional = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const hr = new Date().getHours();

  const handleSubmit = function (e) {
    const name = e.target.value;
    const value = e.target.value;
    dispatch({ ...state, [name]: value });
  };

  const handleChange = function (e) {
    e.preventDefault();
    return e.target.value;
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={state.name}
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={state.email}
        />
        <button onSubmit={() => handleSubmit({ type: "update" })}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Conditional;
