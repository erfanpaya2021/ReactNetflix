import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./app/Routes";
import { Navbar } from "./components";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes />
        </>
    );
};

export default App;
