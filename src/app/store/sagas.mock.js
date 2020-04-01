import { take, put, select } from "redux-saga/effects";

import * as mutations from "./mutations";
import { v4 as uuidv4 } from "uuid";

export function* productCreationSaga() {
  while (true) {
    const { product } = yield take(mutations.REQUEST_PRODUCT_CREATION);
    const ownerID = "U1";
    const name = product.name;
    const category = product.category;
    const isAvailable = product.isAvailable;
    const price = product.price;
    const units = product.units;
    const productID = uuidv4();
    yield put(
      mutations.createProduct(
        productID,
        ownerID,
        name,
        category,
        price,
        units,
        isAvailable
      )
    );
    console.log("Creating new product");
  }
}
