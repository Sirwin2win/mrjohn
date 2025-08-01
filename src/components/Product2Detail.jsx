import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <img src={prod.meta.qrCode} alt="" />
      {/* <p>
        {fruits.map((v) => (
          <p>{v}</p>
        ))}
      </p> */}
      <h1>{prod.title}</h1>
      {/* <h1>{prod.images}</h1> */}
      {arr.map((v) => (
        <img src={v} alt="" />
      ))}
    </div>
  );
};

export default Product2Detail;
