import React, { StrictMode } from "react";
import { render } from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
};

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
