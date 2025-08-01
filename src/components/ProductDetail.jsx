import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaEye, FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(0);
  //   console.log(product);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <img
            src={product.image}
            alt={product.title}
            className="img-thumbnail"
          />
        </div>
        <div className="col-sm-6 my-5">
          <h5>{product.title}</h5>

          <p>{product.description}</p>
          {/* Grid for rate, count, price */}
          <div className="row">
            <div className="col-sm-4">
              <FaStar style={{ color: "orange" }} />
              {/* {product.rating.rate} */}
            </div>
            <div className="col-sm-4">
              <FaEye style={{ color: "orange" }} />
              {/* {product.rating.count} */}
            </div>
            <div className="col-sm-4">${product.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
