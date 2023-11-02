import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function Root() {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
}

export default Root;
