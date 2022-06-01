import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();

  /* 
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `products.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  */

  //  const [cart, setCart] = useCart(products);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];

        addedProduct.quantity = quantity;
        // console.log(addedProduct);
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    // const newCart = [...cart, selectedProduct];
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((pd) => (
          <Product
            product={pd}
            key={pd.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button className="btn remove-btn">
              {" "}
              <p>Review Order</p>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
