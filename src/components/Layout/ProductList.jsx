import React from "react";
import "./ProductList.css";
import medicine from "../../utils/MedList.json";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="productList">
      {medicine.map((item) => (
        <Link to={`/products/${item.id}`}>
          <div className="productInfo">
            <img src={item.image} alt="" className="Product_image" />
            <span className="nameProduct">{item.name}-250ml </span>
            <span className="price">100₹</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
