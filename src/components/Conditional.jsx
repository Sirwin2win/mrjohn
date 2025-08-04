import React from "react";

const Conditional = () => {
  const hr = new Date().getHours();
  //   const days = new Date().getDay();

  /*
if...else statement
ternary operator
switch statement
short circuit and it uses &&
    */
  //   if (hr < 12) {
  //     return <p>Good Morning</p>;
  //   } else {
  //     return <p>Good Evening {days}</p>;
  //   }

  //   switch (days) {
  //     case 0:
  //       return <p>Sunday</p>;
  //       break;
  //     case 1:
  //       return <p>Monday</p>;
  //       break;
  //     case 2:
  //       return <p>Tuesday</p>;
  //       break;
  //     case 3:
  //       return <p>Wednesday {days}</p>;
  //       break;
  //     case 4:
  //       return <p>Thurs</p>;
  //       break;
  //     case 5:
  //       return <p>Fri</p>;
  //       break;
  //     case 6:
  //       return <p>Sat</p>;
  //       break;
  //     default:
  //       return <p>No match found</p>;
  //   }

  //   return <div>{hr > 12 ? <h1>Good evening</h1> : <h1>Good Morning</h1>}</div>;
  // condition?true:false
  const fruits = ["Apple", "Banana", "Orange", "Cherry"];
  const person = [
    { id: 1, name: "Jane Doe", email: "janedoe@gmail.com" },
    { id: 2, name: "Peter Doe", email: "peterdoe@gmail.com" },
    { id: 3, name: "Joel Doe", email: "joeldoe@gmail.com" },
    { id: 4, name: "Paul Doe", email: "pauldoe@gmail.com" },
  ];
  // npx create-react-app mrjohn
  // npm create vite, select project name, cd into project name, npm run dev
  return (
    <div>
      {fruits.length > 0 && fruits.map((v) => <p key={v}>{v}</p>)}
      {person.length > 0 &&
        person.map((v) => (
          <div key={v.id}>
            <h5>{v.name}</h5>
            <p>{v.email}</p>
          </div>
        ))}
      <h1>Something else happens</h1>
    </div>
  );
};

export default Conditional;
