import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "首頁",
    link: "/#",
  },
  {
    id: 2,
    name: "關於我們",
    link: "/#services",
  },
  {
    id: 3,
    name: "最新活動",
    link: "/#",
  },
  {
    id: 4,
    name: "下載專區",
    link: "/#",
  },
  {
    id: 5,
    name: "中道圖書館",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "中道社群",
    link: "/#",
  },
  {
    id: 2,
    name: "中道社群",
    link: "/#",
  },
  {
    id: 3,
    name: "中道社群",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white z-40 fixed top-0 w-full">
      <div className="bg-white/40 py-2">
        <div className="container flex items-center justify-between">
          <div className="object-contain w-60 inset-y-0">
            <a href="#" className="flex items-center">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          <div className="flex justify-center text-xs">
            <ul className="sm:flex hidden items-center">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block px-4 hover:text-primary duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* Simple Dropdown and Links */}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] py-2">
                  中道社群
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* search bar */}
          <div className="flex items-center justify-end">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="搜尋"
                className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-full border
                 border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500
                  dark:bg-gray-800  "
              />
              <IoMdSearch className="text-black group-hover: absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
