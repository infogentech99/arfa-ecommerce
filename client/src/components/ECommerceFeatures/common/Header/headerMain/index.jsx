import { useState } from "react";
//import Caegories from "./caegories";

import Fabrics from "./fabrics";
import { useNavigate } from "react-router-dom";

const HeaderMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Toggles the visibility of the Caegories component
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  // Navigation menu items
  const headerList = [
    {
      route: "#top-picks",
      list: "Trending",
    },
    {
      route: "#top-picks",
      list: "Best Sellers",
    },
    {
      route: "#fabrics",
      list: "Fabrics",
    },
    {
      route: "#top-picks",
      list: "Today's Deals",
    },
    {
      route: "#top-picks",
      list: "New Arrivals",
    },
    {
      route: "#help",
      list: "Help & Settings",
    },
  ];

  return (
    <header id="home" className="border-black">
      {/* Navigation menu */}
      <ul className="flex border-black justify-evenly bg-#134B70-800 pt-1 pb-2 items-center text-sm md:text-base text-black font-medium">
        {headerList.map((item, index) => {
          if (item.list === "Fabrics") {
            return (
              <li
                className="border border-gray-800 px-5 sm:p-1 hover:border-black cursor-pointer"
                key={index}
                onClick={toggleVisibility}
              >
                <a href={item.route}>{item.list}</a>
                <span className="opacity-90 text-[10px] ml-1">▼</span>
              </li>
            );
          }

          // Render "Help & Settings" with navigation to settings page
          if (item.list === "Help & Settings") {
            return (
              <li
                className="hidden sm:inline-block border border-gray-800 p-1 hover:border-black"
                key={index}
              >
                <a href={item.route} onClick={() => navigate("/settings")}>
                  {item.list}
                </a>
              </li>
            );
          }

          // Render other navigation items with a default route
          return (
            <li
              className="hidden sm:inline-block border border-gray-800 p-1 hover:border-black"
              key={index}
            >
              <a href={item.route} onClick={() => navigate("/")}>
                {item.list}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Render Caegories dropdown if visible */}
      {isVisible && <Fabrics />}
    </header>
  );
};

export default HeaderMain;
