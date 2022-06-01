import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    //   console.log("remove product")
    const rest = cart.filter((pd) => pd.id !== product.id);
    // console.log("rest paici: "+rest)
    setCart(rest);

    // console.log(cart)

    removeFromDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button
            className="btn remove-btn"
            onClick={() => navigate("/inventory")}
          >
             <p>Proceed Checkout</p>
              <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
          </button>
          {/* <Link to="/inventory">
            <button className="btn remove-btn">
              {" "}
              <p>Proceed Checkout</p>
              <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
            </button>
            </Link> */}
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
