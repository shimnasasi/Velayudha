import React from "react";
import "./FeaturedProducts.css";
import dataMed from "../../utils/medCategories.json";

const FeaturedProducts = () => {
  return (
    <div className="FeaturedWrapper">
      {dataMed.map((list) => (
        <button className="categoriesBtn">{list.name}</button>
      ))}
    </div>
  );
};

export default FeaturedProducts;
