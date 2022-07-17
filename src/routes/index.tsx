import { RouteObject } from "react-router-dom";

import Home from "./home";
import SignUp from "./signup";
import Login from "./login";
import Account from "./account";

import { ProtectedRoute } from "../components";

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
        element: (
            <ProtectedRoute>
                <Account />
            </ProtectedRoute>
        ),
    },
];

export default routes;
