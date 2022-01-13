import { Navigate } from "react-router-dom";
import { useAtom } from "jotai";
import state from "../state";

const Logout = () => {
    const [user, setUser] = useAtom(state.user);
    setUser(false);
    return <Navigate to="/" />;
};

export default Logout;
