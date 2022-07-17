import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import BG from "../../assets/images/bg.jpg";

const Login = () => {
    const navigate = useNavigate();
    const { logIn } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        setEmail(event.target.value);
    };
    const passwordChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setError("");
        setPassword(event.target.value);
    };

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        try {
            await logIn(email, password);
            navigate("/");
        } catch (error: any) {
            setError(error?.message || "Unknown Error");
        }
    };

    return (
        <>
            <div className="w-full h-screen">
                <img
                    className="hidden sm:block absolute w-full h-full object-cover"
                    src={BG}
                    alt="Netflix"
                />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">Sign In</h1>
                            {error ? (
                                <p className="p-3 bg-red-600 my-3">{error}</p>
                            ) : null}
                            <form
                                onSubmit={submitHandler}
                                className="w-full flex flex-col py-4"
                            >
                                <input
                                    className="p-3 my-2 bg-gray-700 rounded"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="off"
                                    value={email}
                                    onChange={emailChangeHandler}
                                />
                                <input
                                    className="p-3 my-2 bg-gray-700 rounded"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    value={password}
                                    onChange={passwordChangeHandler}
                                />
                                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                                    Sign In
                                </button>
                                <div className="flex items-center justify-beclassNameeen text-sm text-gray-600">
                                    <p>
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                        />
                                        Remeber Me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8">
                                    <span className="text-gray-600 mr-2">
                                        New to netflix?
                                    </span>
                                    <Link to={"/signup"}>Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
