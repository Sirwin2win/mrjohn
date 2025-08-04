import { useState } from "react";

const Hooking = () => {
  const [name, setName] = useState("Mary");
  const [color, setColor] = useState("");

  const person = {
    name: name,
    email: `${name}@gmail.com`,
    favcolor: color,
  };
  const changeName = function () {
    setName("Peter");
  };
  return (
    <div>
      <h1>{person.email}</h1>
      <h2>{person.color}</h2>
      <p style={{ color: color }}>{name}</p>
      <button onClick={changeName}>Change</button>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Blue
      </button>
    </div>
  );
};

export default Hooking;
