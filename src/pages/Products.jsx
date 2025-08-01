import { useEffect, useState } from "react";

const Products = () => {
  const [prod, setProd] = useState({ products: [] });

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProd(json));
  }, []);
  return (
    <div>
      <div className="row">
        {prod.products.map((product) => (
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description} </p>
                <a href={`/product2/${product.id}`} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
