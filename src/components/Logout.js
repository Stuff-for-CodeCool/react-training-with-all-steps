import { memo, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserStateContext } from "..";

const Logout = memo(() => {
    const { user, setUser } = useContext(UserStateContext);
    setUser(false);
    return <Navigate to="/" />;
});

export default Logout;
