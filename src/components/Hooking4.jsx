import { useRef, useReducer } from "react";

const initialState = {
  info: 0,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "increment":
      return { info: state.info + 1 };
    case "decrement":
      return { info: state.info - 1 };

    case "reset":
      return { info: 0 };
  }
};

const Hooking4 = () => {
  const inputVal = useRef("");

  const [state, dispatch] = useReducer(reducer, initialState);

  /*
const count ={
current:0
}    */
  //   const incrementCount = () => {
  //     return { count: count.current + 1 };
  //   };
  //   const decrementCount = () => {
  //     return { count: count - 1 };
  //   };
  const handleClick = function () {
    return inputVal.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputVal} />
      <h2>Header two</h2>

      <button onClick={handleClick}>Click me</button>
      <p>{state.info}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Hooking4;
