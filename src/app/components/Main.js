import React from "react";
import { Provider as Reduxprovider } from "react-redux";
import { store } from "../store/reducers";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedHeader } from "./Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import { ConnectedManageProductDetail } from "../components/products/ManageProductDetail";
import { ConnectedProductsPage } from "./products/ProductsPage";
import {ConnectedAddNewProduct} from './products/AddNewProduct';

export const Main = () => (
  <Router history={history}>
    <Reduxprovider store={store}>
      <div>
        <ConnectedHeader />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/products" component={ConnectedProductsPage} />
        <Route
          exact
          path="/product/:id"
          component={ConnectedManageProductDetail}
        />
        <Route exact path="/products/new" component={ConnectedAddNewProduct} />
      </div>
    </Reduxprovider>
  </Router>
);
