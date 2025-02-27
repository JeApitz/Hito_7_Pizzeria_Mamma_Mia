import React, { useContext, useState } from "react";
// import { pizzaCart as initialCart } from "../pizzas";
import formatoNumero from "../utils/formatoNumero";
import { CartContext } from "../context/CartContext";

import "./Cart.css";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);

  const { token } = useContext(UserContext);

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            <div className="pizza-details">
              <h2>{pizza.name}</h2>
              <p>Precio: ${formatoNumero(pizza.price)}</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    background: "black",
                    color: "whitesmoke",
                    borderRadius: "10px",
                  }}
                  onClick={() => removeFromCart(pizza.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${formatoNumero(getTotalPrice())}</h2>
      </div>
      {token ? (
        <>
          <button className="pay-button">Pagar</button>
        </>
      ) : (
        <>
          <h4 style={{ color: "red" }}>
            ..:: Ingresa a tu cuenta para poder pagar ::..
          </h4>
        </>
      )}
    </div>
  );
};

export default Cart;
