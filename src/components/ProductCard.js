import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
