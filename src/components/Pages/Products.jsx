import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import FeaturedProducts from "../Layout/FeaturedProducts";
import ProductList from "../Layout/ProductList";

const Products = () => {
  return (
    <Layout>
      <PageTop PageName="Products" />
      <FeaturedProducts />
      <ProductList/>
    </Layout>
  );
};

export default Products;
