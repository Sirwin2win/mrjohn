import { useEffect, useState } from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";

const Hooking3 = () => {
  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  if (status === "Loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "error") {
    return <h1>Something went wrong</h1>;
  }
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
