import { RouteObject } from "react-router-dom";

import Home from "./home";
import SignUp from "./signup";
import Login from "./login";
import Account from "./account";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/account",
        element: <Account />,
    },
];

export default routes;
