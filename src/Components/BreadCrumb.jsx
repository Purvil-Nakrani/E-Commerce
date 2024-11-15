import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function BreadCrumb({ title }) {
  const location = useLocation();
  const path = location.pathname.split("/");

  console.log("path in breadcrumb", path);
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <div
        className={`${
          darkMode ? "text-gray-300" : "text-gray-700"
        } mt-14 px-2 xl:pl-0  lg:mt-16 lg:  w-full rounded-br-full text-sm font-semibold  `}
      >
        <Link to="/" className="hover:font-semibold hover:text-pink-900">
          Home
        </Link>
        {path.map((ele) => {
          let currPath = "";
          for (let i = 0; i < path.length; i++) {
            if (path[i] == ele) {
              break;
            } else {
              currPath += `/${ele}`;
            }
          }
          // currPath += `/${ele}`;
          return ele ? (
            path.indexOf(ele) != path.length - 1 ? (
              <span className="">
                <span className="font-semibold"> &gt; </span>
                <Link
                  to={`${currPath}`}
                  className="hover:font-semibold hover:text-pink-900 "
                >
                  {ele.includes("%20")
                    ? ele
                        .split("%20")
                        .map(
                          (str) =>
                            str.substring(0, 1).toUpperCase() + str.substring(1)
                        )
                        .join(" ")
                    : ele}
                </Link>
              </span>
            ) : title ? (
              <span className="text-md font-semibold cursor-not-allowed">
                <span className=""> &gt; </span>
                {title}
              </span>
            ) : (
              ""
            )
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
}

export default BreadCrumb;
