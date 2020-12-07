import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
// import "../css/global.css"

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
