import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";

const ReduxApi = () => {
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
    <div className="container">
      <h1>
        <div className="row my-5">
          {products.map((product) => (
            <div className="col-sm-4 mb-5" key={product.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  {/* <p className="card-text">{product.description}</p> */}
                  <a href={`product/${product.id}`} className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default ReduxApi;
