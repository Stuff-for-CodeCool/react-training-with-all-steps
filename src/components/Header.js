import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { UserStateContext } from "..";

const Header = memo(() => {
    const { user } = useContext(UserStateContext);

    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    React training
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/posts"
                            >
                                Posts
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {user ? (
                            <>
                                <li className="nav-item navbar-text">
                                    Welcome
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        aria-current="page"
                                        to="/logout"
                                    >
                                        Log out
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/login"
                                >
                                    Log in
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
});

export default Header;
