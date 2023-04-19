import React, { useEffect } from "react";

//react-router-dom
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./components/common/layout";

//component
import Auth from "./page/auth";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    //redirect to top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route element={<Auth />} path="/" />
        <Route element={<Layout />}></Route>
      </Routes>
    </>
  );
}
