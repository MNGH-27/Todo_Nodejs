import React, { useEffect } from "react";

//react-router-dom
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./components/common/layout";

//component
import Auth from "./page/auth";

import Dashboard from "./page/dashboard";

import NotFoundPage from "./page/404";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    //redirect to top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Auth />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<NotFoundPage />} path="/*" />
        </Route>
      </Routes>
    </>
  );
}
