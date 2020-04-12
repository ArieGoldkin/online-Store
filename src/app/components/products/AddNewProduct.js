import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../../store/mutations";

export const AddNewProduct = ({
  categories,
  createNewProduct,
  isAvailable,
}) => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    isAvailable: false,
    price: "",
    units: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "name" ? value : value,
      [name]: name === "category" ? value : value,
      [name]: name === "price" ? parseInt(value, 10) : value, // need to fix integer value
      [name]: name === "units" ? parseInt(value, 10) : value,
      isAvailable: product.units < 0 || product.units === " " ? false : true, // need to fix problem
    }));
  }

  console.log(product.units);
  console.log(product.isAvailable);
  console.log(product);
  return (
    <>
      <h2>New Product</h2>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={product.name}
        />
      </div>
      <div>{product.isAvailable ? "Available" : "Not Available"}</div>
      <div>
        <label>Category:</label>
        <select
          name="category"
          onChange={handleChange}
          value={product.category}
        >
          {categories.map((category) => {
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
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={product.price}
        />
      </div>
      <div>
        <label>Units:</label>
        <input
          type="number"
          name="units"
          onChange={handleChange}
          value={product.units}
        />
      </div>
      <div>
        <Link to="/products">
          <button onClick={() => createNewProduct(product)}>Save</button>
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownPrps) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch, ownPrps) => {
  return {
    createNewProduct(product) {
      dispatch(mutations.requestProductCreation(product));
    },
  };
};

export const ConnectedAddNewProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProduct);
