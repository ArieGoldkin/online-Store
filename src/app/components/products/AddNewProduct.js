import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../../store/mutations";

export const AddNewProduct = ({ categories, products, users }) => {
  console.log(products);
  console.log(users);

  return (
    <>
      <h2>New Product</h2>
      <div>
        <label>Product Name:</label>
        <input type="text" name="p_name" />
      </div>
      <div>Available</div>
      <div>
        <label>Category:</label>
        <select>
          {categories.map(category => {
            return (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label>Price:</label>
        <input type="number" />
      </div>
      <div>
        <label>Units:</label>
        <input type="number" />
      </div>
      <div>
        <button>Save</button>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    products: state.products,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch, ownPrps) => {
  let productName = ownPrps.name;
  console.log(ownPrps);
  return {};
};

export const ConnectedAddNewProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProduct);
