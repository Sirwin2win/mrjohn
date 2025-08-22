import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/productReducer";

const ReduxApi = () => {
  const { data: products, isLoading,error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

 return (
    <div>
      <div className="row mt-5">
        {products.map((product) => (
          // {products.data.map((product) => (
          <div className="col-sm-4 mb-3" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              {console.log(product)}
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.category}</h5>
                <h5 className="card-title">{product.title}</h5>
                {/* <p className="card-text">{product.description}</p> */}
                <div className="row">
                  <p className="col">
                    Rating
                    <FcRating />:{product.rating.rate}{" "}
                  </p>
                  <p className="col">
                    Count
                    <FaEye />:{product.rating.count}{" "}
                  </p>
                  <p className="col">${product.price}</p>
                </div>

                <Link to={`${product.id}`} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ReduxApi;
