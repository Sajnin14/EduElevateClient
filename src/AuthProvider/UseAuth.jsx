import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const UseAuth = () => {
    const context = useContext(AuthContext)
    return context;
};

export default UseAuth;