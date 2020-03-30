import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import * as mutations from "../store/mutations";

export const ManageProductDetail = ({ product, categories }) => {
  return (
    <>
      <h2>Product Detail</h2>
      <div>
        <label>Product Name:</label>
        <input type="text" name="p_name" value={product.name} />
      </div>
      <div>Available</div>
      <div>
        <label>Category:</label>
        <select value={product.category}>
          {categories.map(category => {
            return <option key={category.id}>{category.name}</option>;
          })}
        </select>
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={product.price} />
      </div>
      <div>
        <label>Units:</label>
        <input type="number" value={product.units} />
      </div>
      <div>
        <button>Save</button>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  let productID = ownProps.match.params.id;
  let product = state.products.find(product => product.id === productID);
  let categories = state.categories;
  console.log(ownProps);

  console.log(product);
  console.log(categories);
  return {
    product,
    categories
  };
};

export const ConnectedManageProductDetail = connect(mapStateToProps)(
  ManageProductDetail
);
