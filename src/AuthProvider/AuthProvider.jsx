import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState();

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        <Navigate to='/'></Navigate>
        return signOut(auth)

    }


    useEffect(() => {
        const stateChanged = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            return () => {
                return stateChanged();
            }
        })

    }, [])

    const authValue = {
        user,
        setUser,
        createUser,
        loginUser,
        googleSignIn,
        logOut,
        

    }
    return (
        <AuthContext.Provider value={authValue}>
           {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.Object
}
export default AuthProvider;