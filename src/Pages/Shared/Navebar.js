import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto px-1">
      <div className="navbar-start mx-auto">
        <div className="dropdown">
          <label
            tabIndex="0"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          <img
            className="p-1 m-0 h-12"
            src="https://i.ibb.co/WGcmqkS/online-doctor.png"
            alt="Online Doctors"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
