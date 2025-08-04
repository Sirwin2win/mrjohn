import React from "react";

const Monday = () => {
  const name = "John Doe";
  // ES 6 class
  class Student {
    constructor(name, email, level) {
      this.name = name;
      this.email = email;
      this.level = level;
    }
    details() {
      return `My name is ${this.name} , I am in ${this.level}`;
    }
  }

  class Person extends Student {
    constructor(name, email, level, phone) {
      super(name, email, level);
      this.phone = phone;
    }
    show() {
      return `Call me on ${this.phone}`;
    }
  }

  const pers = new Person(
    "Peter Doe",
    "peterdoe@gmail.com",
    "SS1",
    +23457698696
  );
  const stud1 = new Student("Mary Doe", "marydoe@gmail.com", "SS2");
  // Arrow functions
  //   const square = function (n) {
  //     return n ** 2;
  //   };
  const square = (n) => n ** 2;
  const num = "Joel Doe";
  const greet = (n) => `Good day, ${n}`;
  console.log(square(3));
  console.log(greet("Matthew Doe"));
  // var , let , const
  const fruits = ["Apple", "Cherry", "Orange", "Banana"];
  const human = [
    {
      id: 1,
      title: "Title One",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Title Two",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
  ];
  fruits[0] = "Kiwi";
  const car = {
    model: "Toyota",
    year: 2025,
    color: "gray",
  };
  car["color"] = "black";
  // Variable name convention. camelcase(firstName), pascal case(FirstName)
  // , snake case (first_name)
  // Es 6 array methods e.g map()

  return (
    <div>
      <p>{stud1.name}</p>
      <p>{stud1.email}</p>
      <p>{stud1.level}</p>
      <p>{stud1.details()}</p>
      <p>{pers.details()}</p>
      <p>{pers.show()}</p>
      {fruits.map((v) => (
        <p>{v}</p>
      ))}

      {human.map((product) => (
        <>
          <img
            src={product.image}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />
          <h5>{product.title}</h5>
          <p>{product.id}</p>
        </>
      ))}
    </div>
  );
};

export default Monday;
