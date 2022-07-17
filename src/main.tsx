import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

const qc = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={qc}>
                <App />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
