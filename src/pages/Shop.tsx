import React from "react";
import { useProducts } from "../api/products";
import ProductComponent from "../components/Product";

const ShopPage = () => {
  const products = useProducts();

  const listProducts = products.data?.map((product) => {
    if (product.active)
      return <ProductComponent key={product.id} product={product} />;
  });

  return (
    <div className="container mt-3">
      <h3>Shop</h3>
      <hr />
      {products.isLoading ? (
        <>
          <i className="fa fa-spinner fa-spin fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </>
      ) : (
        <div className="row">{listProducts}</div>
      )}
    </div>
  );
};

export default ShopPage;
