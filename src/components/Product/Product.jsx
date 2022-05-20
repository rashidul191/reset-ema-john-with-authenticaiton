import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, ratings, seller } = props.product;
  const {handleAddToCart} = props

  return (
    <div className="product-item">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">Price: ${price}</p>
        <p>
          <small>Seller : {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>

      <button onClick={()=>handleAddToCart(props.product)} className="btn-cart">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
