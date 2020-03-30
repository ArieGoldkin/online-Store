import React from "react";
import { connect } from "react-redux";
import { ConnectedProductList } from "./ProductsList";
import { Link } from "react-router-dom";

export const ProductsPage = ({ users, products, categories }) => (
  <>
    <h2>Products List</h2>
    <ConnectedProductList
      products={products}
      users={users}
      categories={categories}
    />
  </>
);

function mapStateToProps(state, ownProps) {
  let prodcutsID = state.products.map(product => product.id);
  return {
    users: state.users,
    products: state.products,
    categories: state.categories
  };
}

export const ConnectedProductsPage = connect(mapStateToProps)(ProductsPage);
