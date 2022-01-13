import { memo, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserStateContext } from "..";

const Login = memo(() => {
    const { user, setUser } = useContext(UserStateContext);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username === "react" && password === "training") {
            setUser(true);
            e.target.reset();
            return <Navigate to="/" />;
        } else {
            setError("Username or password incorrect");
        }
    };

    const dismissError = (e) => {
        e.preventDefault();
        e.target.parentElement.classList.remove("show");
        setTimeout(() => {
            setError(null);
        }, 350);
    };

    return (
        <main className="container my-3">
            {error && (
                <div
                    className="alert alert-danger mb-3 alert-dismissible fade show"
                    role="alert"
                >
                    {error}
                    <button
                        type="button"
                        className="btn-close"
                        onClick={dismissError}
                    ></button>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </main>
    );
});

export default Login;
