import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slices/productSlice";
import ProductCard from "../components/ProductCard";
import axios from "../services/api";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    axios.get("/products").then((response) => {
      dispatch(setProducts(response.data));
    });
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
