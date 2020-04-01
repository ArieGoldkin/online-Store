export const REQUEST_PRODUCT_CREATION = `REQUEST_PRODUCT_CREATION `;
export const CREATE_PRODUCT = `CREATE_PRODUCT`;
// export const SET_PRODUCT_AVAILABLE = `SET_PRODUCT_AVAILABLE`;
// export const SET_PRODUCT_CATEGORY = `SET_PRODUCT_CATEGORY`;
// export const SET_PRODUCT_NAME = `SET_PRODUCT_NAME`;
// export const SET_PRODUCT_PRICE = `SET_PRODUCT_PRICE`;
// export const SET_PRODUCT_UNITS = `SET_PRODUCT_UNITS`;
// export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
// export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
// export const AUTHENTICATING = `AUTHENTICATING`;
// export const AUTHENTICATED = `AUTHENTICATED`;
// export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
// export const SET_STATE = `SET_STATE`;

export const requestProductCreation = product => ({
  type: REQUEST_PRODUCT_CREATION,
  product
});

export const createProduct = (
  id,
  ownerID,
  name,
  category,
  price,
  units,
  isAvailable
) => ({
  type: CREATE_PRODUCT,
  id,
  ownerID,
  name,
  category,
  price,
  units,
  isAvailable
});

// export const requestProductCreation = categoryID => ({
//   type: REQUEST_PRODUCT_CREATION,
//   categoryID
// });

// export const createProduct = (
//   productID,
//   categoryID,
//   ownerID,
//   productName,
//   price,
//   units
// ) => ({
//   type: CREATE_PRODUCT,
//   productID,
//   categoryID,
//   ownerID,
//   productName,
//   price,
//   units
// });

// export const setProductAvailable = (id, isAvailable) => ({
//   type: SET_PRODUCT_AVAILABLE,
//   productID: id,
//   isAvailable
// });

// export const setProductName = (id, name) => ({
//   type: SET_PRODUCT_NAME,
//   productID: id,
//   name
// });

// export const setProductCategory = (id, categoryID) => ({
//   type: SET_PRODUCT_CATEGORY,
//   productID: id,
//   categoryID
// });

// export const setProductPrice = (id, price) => ({
//   type: SET_PRODUCT_PRICE,
//   productID: id,
//   price
// });
// export const setProductUnits = (id, units) => ({
//   type: SET_PRODUCT_UNITS,
//   productID: id,
//   units
// });
