import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="absolute z-[100] flex items-center justify-between w-full p-4">
            <h1 className="cursor-pointer text-4xl font-bold text-red-600">
                <Link to="/">NETFLIX</Link>
            </h1>
            <div className="flex items-center">
                {user === null ? (
                    <>
                        <button className="pr-4">
                            <Link to={"/login"}>Sign In</Link>
                        </button>
                        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
                            <Link to={"/signup"}> Sign UP</Link>
                        </button>
                    </>
                ) : (
                    <>
                        <button className="pr-4">
                            <Link to={"/account"}>Account</Link>
                        </button>
                        <button
                            onClick={logOut}
                            className="bg-red-600 px-6 py-2 rounded cursor-pointer"
                        >
                            Log out
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
