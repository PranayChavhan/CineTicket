import React from "react";
import Navbarr from "../components/Navbar/Navbar.Component";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbarr/>
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default MovieLayoutHoc;
