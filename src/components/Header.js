import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <Link
          to={{
            pathname: "/",
          }}
          class="navbar-brand text-light"
          href="#"
        >
          Review Website
        </Link>
      </div>
    </nav>
  );
};

export default Header;
