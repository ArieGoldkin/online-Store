import { take, put, select } from "redux-saga/effects";

import * as mutations from "./mutations";
import { v4 as uuidv4 } from "uuid";

export function* productCreationSaga() {
  while (true) {
    yield take(mutations.REQUEST_PRODUCT_CREATION);
    const ownerID = "U1";
    const categoryID = "C2";
    const price = 150;
    const units = 10;
    const productID = uuidv4();
    yield put(
      mutations.createProduct(productID, categoryID, ownerID, price, units)
    );
    console.log("Creating new product");
  }
}
