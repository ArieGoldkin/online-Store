import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>WELCOME TO GOLD STORE</h1>
      <p>Welcome to the responsive web sore online for everyone</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
