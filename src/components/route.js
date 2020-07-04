import React, { Fragment } from "react";

const Route = ({ path, children }) =>
  window.location.pathname === path && <Fragment>{children}</Fragment>;

export default Route;
