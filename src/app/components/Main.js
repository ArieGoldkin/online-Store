import React, { Component } from "react";
import { Provider as Reduxprovider } from "react-redux";
import { store } from "../store/reducers";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedHeader } from "./Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import { ConnectedManageProductDetail } from "../components/products/ManageProductDetail";
import { ConnectedProductsPage } from "./products/ProductsPage";
import { ConnectedAddNewProduct } from "./products/AddNewProduct";
import { ConnectedLogin } from "../components/authentication/Login";
import { Redirect } from "react-router";

const RouteGuard = (Component) => ({ match }) => {
  console.info("Route guard", match);
  if (!store.getState().session.authenticated) {
    return <Redirect to="/login" />;
  }
  {
    return <Component match={match} />;
  }
};

export const Main = () => (
  <Router history={history}>
    <Reduxprovider store={store}>
      <div>
        <ConnectedHeader />
        <Route exact path="/login" component={ConnectedLogin} />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route
          exact
          path="/products"
          component={RouteGuard(ConnectedProductsPage)}
        />
        <Route
          exact
          path="/product/:id"
          component={RouteGuard(ConnectedManageProductDetail)}
        />
        <Route
          exact
          path="/products/new"
          component={RouteGuard(ConnectedAddNewProduct)}
        />
      </div>
    </Reduxprovider>
  </Router>
);
