import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const AddNewProduct = ({ categories, products }) => (
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
const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export const ConnectedAddNewProduct = connect(mapStateToProps)(AddNewProduct);
