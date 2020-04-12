import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
// import * as sagas from "./sagas.mock";
import * as sagas from "./sagas";
import * as mutations from "./mutations";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  combineReducers({
    session(userSession = defaultState.session || {}, action) {
      let { type, authenticated, session } = action;
      switch (type) {
        case mutations.SET_STATE:
          return { ...userSession, id: action.state.session.id };
        case mutations.REQUEST_AUTHENTICATE_USER:
          return { ...userSession, authenticated: mutations.AUTHENTICATING };
        case mutations.PROCESSING_AUTHENTICATE_USER:
          return { ...userSession, authenticated };
        default:
          return userSession;
      }
    },
    products(products = [], action) {
      switch (action.type) {
        case mutations.SET_STATE:
          return action.state.products;
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
              isAvailable: action.isAvailable,
            },
          ];
        case mutations.SET_PRODUCT_AVAILABLE:
          return products.map((product) => {
            return product.id === action.productID
              ? { ...product, isAvailable: action.isAvailable }
              : product;
          });
        case mutations.SET_PRODUCT_NAME:
          return products.map((product) => {
            return product.id === action.productID
              ? { ...product, name: action.name }
              : product;
          });
        case mutations.SET_PRODUCT_CATEGORY:
          return products.map((product) => {
            return product.id === action.productID
              ? { ...product, category: action.categoryID }
              : product;
          });
        case mutations.SET_PRODUCT_PRICE:
          return products.map((product) => {
            return product.id === action.productID
              ? { ...product, price: action.price }
              : product;
          });
        case mutations.SET_PRODUCT_UNITS:
          return products.map((product) => {
            return product.id === action.productID
              ? { ...product, units: action.units }
              : product;
          });
      }
      return products;
    },
    comments(comments = []) {
      return comments;
    },
    categories(categories = [], action) {
      switch (action.type) {
        case mutations.SET_STATE:
          return action.state.categories;
      }
      return categories;
    },
    users(users = []) {
      return users;
    },
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
