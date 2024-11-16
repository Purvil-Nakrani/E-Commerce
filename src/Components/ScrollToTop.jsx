import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

function ScrollToTop() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <button
      className={`${window.pageYOffset > 700 ? "block" : "hidden"}`}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <FaArrowCircleUp
        className={`${
          darkMode ? "text-white opacity-80" : "text-sky-600 opacity-60"
        }  z-[70] size-10  lg:size-12 text-xl fixed bottom-20 right-5 lg:bottom-16 lg:right-12 `}
      />
      {/* <br />
            <span>Scroll to top</span> */}
    </button>
  );
}

export default ScrollToTop;
