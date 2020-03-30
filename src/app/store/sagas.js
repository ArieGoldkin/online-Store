import { take, put, select } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { history } from "./history";

import * as mutations from "./mutations";

const url = "http://localhost:7777";

export function* productCreationSaga() {
  while (true) {
    const { categoryID } = yield take(mutations.REQUEST_PRODUCT_CREATION);
    const ownerID = `U1`;
    const productID = uuidv4();
    yield put(mutations.createProduct(productID, categoryID, ownerID));
    const { res } = yield axios.post(url + `/product/new`, {
      product: {
        id: productID,
        owner: ownerID,
        category: categoryID
      }
    });

    // console.info("Got response,", res);
  }
}

export function* productModificationSaga() {
  while (true) {
    const product = yield take([
      mutations.SET_PRODUCT_NAME,
      mutations.SET_PRODUCT_CATEGORY,
      mutations.SET_PRODUCT_PRICE,
      mutations.SET_PRODUCT_UNITS,
      mutations.SET_PRODUCT_AVAILABLE
    ]);
    axios.post(url + `/product/update`, {
      product: {
        id: product.productID,
        category: product.categoryID,
        name: product.name,
        price: product.price,
        units: product.units,
        isAvailable: product.isAvailable
      }
    });
  }
}
