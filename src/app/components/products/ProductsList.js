import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const ProductsList = ({ products, categories, users }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Units Abailable</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            return (
              <tr key={product.id}>
                <td>
                  <Link to={"/product/" + product.id} key={product.id}>
                    {product.name}
                  </Link>
                </td>
                <td>
                  {categories.map(category => {
                    return product.category === category.id
                      ? category.name
                      : "";
                  })}
                </td>
                <td>{product.price + "$"}</td>
                <td>{product.units}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button>
        <Link to="/products/new">Add New Product</Link>
      </button>
    </>
  );
};

function mapStateToProps(state) {
  
  return {
    users: state.users,
    categories: state.categories,
    products: state.products
  };
}

export const ConnectedProductList = connect(mapStateToProps)(ProductsList);
