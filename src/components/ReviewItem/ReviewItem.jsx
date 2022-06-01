import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
    const {handleRemoveProduct, product} = props
  const { img, name, price, shipping, quantity } = product;
  return (
    <div className="product-review">
      <img src={img} alt="" />

      <div className="price-color">
        {/* <h4>{name}</h4> */}
        <h4 title={name}>
          {name.length > 20 ? name.slice(0, 20) + "...." : name}
        </h4>
        <p>
          Price : <span>$ {price}</span>
        </p>
        <p>
          Shipping Charge : <span>$ {shipping}</span>
        </p>

        <p>
          Quantity : <span>$ {quantity}</span>
        </p>
      </div>

      <button onClick={()=> handleRemoveProduct(product)}>
        {" "}
        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>{" "}
      </button>
    </div>
  );
};

export default ReviewItem;
