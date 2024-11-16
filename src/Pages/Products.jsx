import React from "react";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import ScrollToTop from "../Components/ScrollToTop";

function Products() {
  return (
    <>
      {" "}
      <SideBar />
      <div className="h-lvh w-fit text-center flex m-auto items-center font-bold text-5xl">
        All Products Page
      </div>
      {/* ***** SCROLL TO TOP BUTTON ***** */}
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Products;
