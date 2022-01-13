import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Posts from "./components/Posts";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/posts" element={<Posts />}></Route>
            </Routes>
            <Footer />
        </>
    );
};

render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
    document.getElementById("root")
);
