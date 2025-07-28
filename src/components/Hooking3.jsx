import { useEffect, useState } from "react";

const Hooking3 = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((demo) => demo.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-4 mb-5" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">
                  read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hooking3;
