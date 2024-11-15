import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import MyProductCompo from "./MyProductCompo";
function ImageSlider() {
  const productsList = useSelector((state) => state.products);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <></>
    // <Slider {...settings}>
    //   {productsList.map((ele, index) => (
    //     <MyProductCompo ele={ele} />
    //   ))}
    //   <div>
    //     <h3>1</h3>
    //   </div>
    // </Slider>
  );
}

export default ImageSlider;
