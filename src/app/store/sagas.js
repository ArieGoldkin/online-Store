import { take, put, select } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { history } from "./history";

import * as mutations from "./mutations";

const url = process.env.NODE_ENV == `production` ? `` : "http://localhost:9999";

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
    const { res } = yield axios.post(url + `/product/new`, {
      product: {
        id: productID,
        owner: ownerID,
        name: name,
        category: category,
        price: price,
        units: units,
        isAvailable: isAvailable,
      },
    });
    console.info("Got response,", res);
  }
}

export function* productModificationSaga() {
  while (true) {
    const product = yield take([
      mutations.SET_PRODUCT_NAME,
      mutations.SET_PRODUCT_CATEGORY,
      mutations.SET_PRODUCT_PRICE,
      mutations.SET_PRODUCT_UNITS,
      mutations.SET_PRODUCT_AVAILABLE,
    ]);
    axios.post(url + `/product/update`, {
      product: {
        id: product.productID,
        category: product.categoryID,
        name: product.name,
        price: product.price,
        units: product.units,
        isAvailable: product.isAvailable,
      },
    });
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(
      mutations.REQUEST_AUTHENTICATE_USER
    );
    try {
      const { data } = yield axios.post(url + "/authenticate", {
        username,
        password,
      });
      if (!data) {
        throw new Error();
      }
      console.log("Authenticated!", data);

      yield put(mutations.setState(data.state));
      yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));

      history.push("/products");
    } catch (e) {
      console.log("can't authenticate");
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}
