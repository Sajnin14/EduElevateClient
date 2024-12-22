import { Navigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const {user, loading} = UseAuth();

    if(loading){
        return <div className="w-2/4 mx-auto flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to='/auth/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.object
}
export default PrivateRoute;