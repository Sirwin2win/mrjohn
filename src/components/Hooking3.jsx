import { useEffect, useState } from "react";
import { FaEye, FaStar } from "react-icons/fa";

const Hooking3 = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((demo) => demo.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-4 my-5" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                {/* Grid for rate, count, price */}
                <div className="row">
                  <div className="col-sm-4">
                    <FaStar style={{ color: "orange" }} />
                    {product.rating.rate}
                  </div>
                  <div className="col-sm-4">
                    <FaEye style={{ color: "orange" }} />
                    {product.rating.count}
                  </div>
                  <div className="col-sm-4">${product.price}</div>
                </div>
                <a href={`product/${product.id}`} className="btn btn-primary">
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
