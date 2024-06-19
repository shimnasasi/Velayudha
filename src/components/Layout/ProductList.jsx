import React from "react";
import "./ProductList.css";
import medicine from "../../utils/MedList.json";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const ProductList = () => {
  return (
    <div className="productList">
      {medicine.map((item) => (
        <div className="productInfo">
          <img src={item.image} alt="" className="Product_image" />

          <h4>{item.name}-250ml </h4>
          {/* <div className="productIcons">
            <FaEye />
            <FaSquareWhatsapp />
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
