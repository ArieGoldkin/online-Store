import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import * as sagas from "./sagas.mock";
import * as mutations from "./mutations";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    products(products = defaultState.products, action) {
      switch (action.type) {
        case mutations.CREATE_PRODUCT:
          // console.log(action);
          return [
            ...products,
            {
              name: action.name,
              id: action.id,
              category: action.category,
              owner: action.ownerID,
              price: action.price,
              units: action.units,
              isAvailable: action.isAvailable
            }
          ];
      }
      return products;
    },
    comments(comments = defaultState.comments) {
      return comments;
    },
    categories(categories = defaultState.categories) {
      return categories;
    },
    users(users = defaultState.users) {
      return users;
    }
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { defaultState } from "../../server/defaultState";
// import { createLogger } from "redux-logger";
// import createSagaMiddleware from "redux-saga";

// const sagaMiddleware = createSagaMiddleware();
// import * as sagas from "./sagas";
// import * as mutations from "./mutations";

// export const store = createStore(
//   combineReducers({
//     products(products = defaultState.products, action) {
//       switch (action.type) {
//         case mutations.CREATE_PRODUCT:
//           // console.log(action);
//           return [
//             ...products,
//             {
//               name: "New Product",
//               id: action.productID,
//               category: action.categoryID,
//               owner: action.ownerID,
//               price: action.price,
//               units: action.units,
//               isAvailable: true
//             }
//           ];
//         case mutations.SET_PRODUCT_AVAILABLE:
//           return products.map(product => {
//             return product.id === action.productID
//               ? { ...product, isAvailable: action.isAvailable }
//               : product;
//           });
//         case mutations.SET_PRODUCT_NAME:
//           return products.map(product => {
//             return product.id === action.productID
//               ? { ...product, name: action.name }
//               : product;
//           });
//         case mutations.SET_PRODUCT_CATEGORY:
//           return products.map(product => {
//             return product.id === action.productID
//               ? { ...product, category: action.categoryID }
//               : product;
//           });
//         case mutations.SET_PRODUCT_PRICE:
//           return products.map(product => {
//             return product.id === action.productID
//               ? { ...product, price: action.price }
//               : product;
//           });
//         case mutations.SET_PRODUCT_UNITS:
//           return products.map(product => {
//             return product.id === action.productID
//               ? { ...product, units: action.units }
//               : product;
//           });
//       }
//       return products;
//     },
//     comments(comments = defaultState.comments) {
//       return comments;
//     },
//     categories(categories = defaultState.categories) {
//       return categories;
//     },
//     users(users = defaultState.users) {
//       return users;
//     }
//   }),
//   applyMiddleware(createLogger(), sagaMiddleware)
// );

// for (let saga in sagas) {
//   sagaMiddleware.run(sagas[saga]);
// }
