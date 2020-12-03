import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
// import "../css/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
