import React from "react";
import { connect } from "react-redux";
import * as mutations from "../../store/mutations";

const LoginComponent = ({ authenticateUser, authenticated }) => {
  return (
    <>
      <h2>Please Login</h2>
      <form onSubmit={authenticateUser}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          defaultValue="Arie"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          defaultValue=""
        />
        {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p>Login Failed</p>
        ) : null}
        <button type="submit">Login</button>
      </form>
    </>
  );
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser(event) {
    event.preventDefault();
    let username = event.target["username"].value;
    let password = event.target["password"].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  },
});

export const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
