import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="absolute z-50 flex items-center justify-between w-full p-4">
            <h1 className="cursor-pointer text-4xl font-bold text-red-600">
                <Link to="/">NETFLIX</Link>
            </h1>
            <div className="flex items-center">
                <button className="py-2 px-6 ">
                    <Link to="/login">Sign In</Link>
                </button>
                <button className=" py-2 px-6 rounded   bg-red-600">
                    <Link to="/signup">Sign Up</Link>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
