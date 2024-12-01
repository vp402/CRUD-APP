import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/api";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/products/${id}`).then((response) => setProduct(response.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Product;
