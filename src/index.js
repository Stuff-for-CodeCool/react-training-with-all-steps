import React, {
    createContext,
    StrictMode,
    useMemo,
    useState,
} from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Logout from "./components/Logout";

const userInitialState = { user: null, setUser: undefined };
export const UserStateContext = createContext(userInitialState);

const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState(userInitialState.user);
    const userContextValue = useMemo(() => ({ user, setUser }), [user]);

    return (
        <UserStateContext.Provider value={userContextValue}>
            {children}
        </UserStateContext.Provider>
    );
};

const App = () => {
    return (
        <GlobalContextProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="/posts/:id" element={<Post />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </GlobalContextProvider>
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
