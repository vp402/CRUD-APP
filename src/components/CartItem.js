import React, { useState } from "react";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={handleQuantityChange}
      />
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
