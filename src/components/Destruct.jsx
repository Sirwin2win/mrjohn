import React from "react";
import { lastName, firstName, newAge } from "./Des";
import { car, city, location } from "./AtOnce";
import DefExport from "./DefExport";
import "./Style.css";
import Test from "./Test";
import stelo from "./myStyle.module.css";

const Destruct = () => {
  // Destructuring of arrays and objects
  const fruits = ["Apple", "Banana", "Orange", "Cherry"];
  //   let apple = fruits[0]
  //   let banana = fruits[1]
  const [e, c, ...a] = fruits;
  // Destructuring an object

  const person = {
    name: "Joel Doe",
    email: "joeldoe@gmail.com",
    age: 100,
  };

  const { name, email, age } = person;

  //   const accessMe = function (n) {
  const accessMe = function ({ name, email, age }) {
    console.log(`${name}:${email}:${age}`);
    // for (let i in n) {
    //   console.log(n[i]);
    // }
  };
  accessMe(person);

  // The spread operator(...) for arrays
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [7, 8, 9];
  const nums = [...arr1, ...arr2, ...arr3];
  //   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(nums);
  // using spread operator as a function parameter
  const add = function (...n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum += n[i];
    }
    console.log(sum);
  };
  console.log("See me");
  add(2, 3, 4, 5, 6, 7, 3);

  // The spread operator(...) for object
  let obj1 = {
    name: "person1",
    age: 20,
  };
  let obj2 = {
    email: "person2",
    phone: 21,
  };
  const humans = { ...obj2, ...obj1 };
  for (let i in humans) {
    console.log(humans[i]);
  }
  //   alert(humans);
  const people = { ...humans, name: "Dark" };
  console.log(people);
  // ES 6 modules; export and import statements
  // export - named export(individually, all at once); default export
  // Using css in react
  /*
1. Inline Css
2. External
3. Css module
  */
  return (
    <div>
      <div className={stelo.homePage}>Container</div>
      <DefExport />
      <Test />
      <p className="demo">{e}</p>
      <p>{c}</p>
      <p className="demo">{a}</p>
      <p>{name}</p>
      <p className="demo">{email}</p>
      <p>{age}</p>
      <p className="demo">{nums}</p>
      <h3 style={{ color: "white", backgroundColor: "blue", padding: "20px" }}>
        {firstName}:{lastName}:{newAge}
      </h3>
      <h3>
        {car}:{city}:{location}
      </h3>
      <button onClick={() => add(2, 3, 4, 5, 6, 7, 3)}>Sum</button>
    </div>
  );
};

export default Destruct;
