import { useState, useEffect } from "react";

const Hooking2 = () => {
  //   const [products, setProducts] = useState([]);
  //   console.log(products);
  const [car, setCar] = useState({
    model: "Toyota",
    year: 2023,
    color: "black",
  });
  const [name, setName] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = function () {
    setCar((prev) => {
      return { ...prev, year: 2024, color: "green" };
    });
  };
  const handleUser = function (e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(user);
  };
  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((json) => setProducts(json));
  //   }, []);
  return (
    <div>
      {/* {products.map((product) => (
        <div>
          <img
            src={product.image}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />
          <h5>{product.title}</h5>
        </div>
      ))} */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleUser}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleUser}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleUser}
        />
        <input type="submit" value="Create User" />
      </form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name.toLocaleUpperCase()}</p>
      <p>{car.year}</p>
      <p>{car.color}</p>
      <button onClick={handleChange}>updateYear</button>
    </div>
  );
};

export default Hooking2;
