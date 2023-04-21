import React from "react";

//react router dom
import { Outlet } from "react-router-dom";

//react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
}
