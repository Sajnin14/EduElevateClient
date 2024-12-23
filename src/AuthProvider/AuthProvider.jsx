import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (updateInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateInfo)
    }

    const logOut = () => {
        setLoading(true);
        <Navigate to='/'></Navigate>
        return signOut(auth)

    }


    useEffect(() => {
        const stateChanged = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser?.email){
                const user = {email: currentUser.email};
                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                    setLoading(false);
                })
            }

            else{
                axios.post('http://localhost:5000/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data);
                    setLoading(false);
                })
            }
            
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
        updateUser,
        loading,
        

    }
    return (
        <AuthContext.Provider value={authValue}>
           {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.func
}
export default AuthProvider;