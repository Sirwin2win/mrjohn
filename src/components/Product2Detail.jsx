import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bg1 from "../images/img2.avif";
import { FaStar } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";

const Product2Detail = () => {
  const { id } = useParams();
  const [prod, setProd] = useState(0);
  //   console.log(prod);

  const fruits = ["Apple", "Banana", "Orange"];

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProd(json));
  }, []);
  let arr = [];
  for (let i in prod.images) {
    arr.push(prod.images[i]);
  }
  return (
    <div>
      {/* <img src={prod.meta.qrCode} alt="" /> */}
      {/* <p>
        {fruits.map((v) => (
          <p>{v}</p>
        ))}
          price; rating and stock
      </p> */}
      <div
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${bg1})`,
          height: "500px",
          marginTop: "-100px",
        }}
      ></div>

      <div className="row">
        <div className="col-sm-4">
          {arr.map((v) => (
            <img src={v} style={{ width: "400px" }} alt="" />
          ))}
        </div>
        <div className="col-sm-6 ms-5 mt-5">
          <h5>{prod.title}</h5>
          <p>{prod.description}</p>
          <div className="row">
            <div className="col-sm-4">${prod.price}</div>
            <div className="col-sm-4">
              <FaStar style={{ color: "orange" }} />
              {prod.rating}
            </div>
            <div className="col-sm-4">
              <AiOutlineStock />
              {prod.stock}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2Detail;
