import React from "react";

import "./EntryPoint.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

function EntryPoint() {
  return (
    <>
      <Header />
        <main>
        <Outlet />
        </main>
      <Footer />
    </>
  );
}

export default EntryPoint;
