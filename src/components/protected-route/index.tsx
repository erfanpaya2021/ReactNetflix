import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface Props {
    children: JSX.Element;
}

const ProtectedRoute: React.FunctionComponent<Props> = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to={"/"} />;
    } else {
        return children;
    }
};

export default ProtectedRoute;
