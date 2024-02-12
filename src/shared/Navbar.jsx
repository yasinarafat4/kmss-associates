import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/kms-logo.png";

const Navbar = () => {
  // States
  const [navToggle, setNavToggle] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");

  // Dark and Light Mood effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Dark & Light Mood handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navbar sticky top-0 z-50 bg-white shadow-lg dark:bg-slate-800  dark:text-white lg:px-20">
      <div className="flex-1">
        <Link to="/">
          <div className="flex justify-center items-center">
            <img className="w-14 md:w-20" src={logo} alt="" />
          </div>
        </Link>
      </div>
      <div
        className={`absolute ${
          navToggle ? "left-0" : "left-[-120%]"
        } top-[4rem] flex w-full flex-col bg-white pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}
      >
        <div className="menu menu-horizontal flex-col space-y-3 lg:space-y-0 px-1 lg:flex-row lg:gap-4 xl:gap-6">
          <div
            onClick={() => setNavToggle(!navToggle)}
            className={({ isActive }) =>
              isActive
                ? "underline text-slate-100"
                : "text-slate-100 dark:text-slate-100"
            }
          >
            <Link to="/">
              <p className="text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500">
                Home
              </p>
            </Link>
          </div>
          <div
            onClick={() => setNavToggle(!navToggle)}
            className={({ isActive }) =>
              isActive
                ? "underline text-slate-100"
                : "text-slate-100 dark:text-slate-100"
            }
          >
            <p className="text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500">
              Services
            </p>
          </div>

          <div
            onClick={() => setNavToggle(!navToggle)}
            className={({ isActive }) =>
              isActive
                ? "underline text-slate-100"
                : "text-slate-100 dark:text-slate-100"
            }
          >
            <p className="text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500">
              About
            </p>
          </div>
          <div
            onClick={() => setNavToggle(!navToggle)}
            className={({ isActive }) =>
              isActive
                ? "underline text-slate-100"
                : "text-slate-100 dark:text-slate-100"
            }
          >
            <p className="text-lg lg:text-base 2xl:text-lg font-medium hover:duration-500">
              Contact
            </p>
          </div>

          {/* Avatar */}
        </div>
        <div title="K.M Saiful Islam" className="avatar">
          <div className="w-8 mx-4 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        {/* Dark & Light mode */}
        <label className="swap swap-rotate mt-2 lg:mt-0 lg:mr-3">
          <input type="checkbox" />

          {isDarkMode ? (
            <svg
              className="swap-on h-8 w-8 fill-current text-slate-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={handleThemeSwitch}
            >
              <title>Make Light</title>
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          ) : (
            <svg
              className="swap-off h-8 w-8 fill-current text-slate-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={handleThemeSwitch}
            >
              <title>Make Dark</title>
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          )}
        </label>
      </div>
      <label className="swap-rotate swap btn-ghost btn-circle btn ml-2 bg-white dark:bg-slate-800 lg:hidden">
        <input
          checked={navToggle}
          onChange={() => setNavToggle((pre) => !pre)}
          type="checkbox"
        />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </nav>
  );
};

export default Navbar;
