import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../../store/mutations";

export const AddNewProduct = ({ categories, createNewProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    isAvailable: false,
    price: "",
    units: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: name === "name" ? value : value,
      [name]: name === "category" ? value : value,
      [name]: name === "price" ? parseInt(value) : value,
      [name]: name === "units" ? parseInt(value) : value
    });
  }
  console.log(product);

  return (
    <>
      <h2>New Product</h2>
      <div>
        <label>Product Name:</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>Available</div>
      <div>
        <label>Category:</label>
        <select
          name="category"
          onChange={handleChange}
          value={product.category}
        >
          {categories.map(category => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" onChange={handleChange} />
      </div>
      <div>
        <label>Units:</label>
        <input type="number" name="units" onChange={handleChange} />
      </div>
      <div>
        <button onClick={() => createNewProduct(product)}>
          <Link to="/products">Save</Link>
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownPrps) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch, ownPrps) => {
  return {
    createNewProduct(product) {
      dispatch(mutations.requestProductCreation(product));
    }
  };
};

export const ConnectedAddNewProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProduct);
