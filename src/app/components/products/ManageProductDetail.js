import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../../store/mutations";

export const ManageProductDetail = ({
  product,
  categories,
  comments,
  id,
  isAvailable,
  setProductName,
  setProductCategory,
  setProductPrice,
  setProductUnits
}) => {
  return (
    <>
      <h2>Product Detail</h2>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          name="p_name"
          onChange={setProductName}
          value={product.name}
        />
      </div>
      <div>{isAvailable ? "Avaliable" : "Not Avaliable"}</div>
      <div>
        <label>Category:</label>
        <select onChange={setProductCategory}>
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
        <input type="number" onChange={setProductPrice} value={product.price} />
      </div>
      <div>
        <label>Units:</label>
        <input type="number" onChange={setProductUnits} value={product.units} />
      </div>
      <div>
        <button>Save</button>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let product = state.products.find(product => product.id === id);
  let categories = state.categories;

  console.log(id);
  console.log(product);
  console.log(categories);
  return {
    id,
    product,
    categories,
    isAvailable: product.isAvailable
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    setProductName(event) {
      dispatch(mutations.setProductName(id, event.target.value));
    },
    setProductCategory(event) {
      dispatch(mutations.setProductCategory(id, event.target.value));
    },
    setProductPrice(event) {
      dispatch(mutations.setProductPrice(id, event.target.value));
    },
    setProductUnits(event, isAvailable) {
      let units = event.target.value;
      if (units > 0) {
        isAvailable = true;
      } else {
        isAvailable = false;
      }
      dispatch(mutations.setProductUnits(id, event.target.value));
      dispatch(mutations.setProductAvailable(id, isAvailable));
    }
  };
};

export const ConnectedManageProductDetail = connect(
  mapStateToProps,
  mapDispatchtoProps
)(ManageProductDetail);
