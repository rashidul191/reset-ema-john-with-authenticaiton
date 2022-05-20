import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
    // console.log(cart)

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    //   console.log(product.price)
    total += product.price * product.quantity;
    shipping += product.shipping;
    quantity += product.quantity;
  }

  const tax = total * 10 / 100;
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart-style">
      <h3>Order Summary</h3>
      <div>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: $ {total}</p>
        <p>Total Shipping Charge: $ {shipping}</p>
        <p>Tax: $ {tax.toFixed(2)}</p>
        <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
      </div>
      <div className="cart-btn">
        <button className="btn clear-btn">
          <p>Clear Cart</p>
        </button>
        {/* <br /> */}
        <button className="btn remove-btn">
          <p>Remove Order</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
