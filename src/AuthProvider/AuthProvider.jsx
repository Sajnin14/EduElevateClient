import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    
    const googleProvider = new GoogleAuthProvider();

    

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // states for theme controller
    const [theme, setTheme] = useState('light');
    const [themeActive, setThemeActive] = useState(true);

    //  code for theme changing

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        setThemeActive(theme === "light");
      }, [theme]);
    
      
      const changeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
      };


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
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://server-side-taupe-beta.vercel.app/jwt', user, { withCredentials: true })
                    .then(() => {
                        setLoading(false);
                    })
            }

            else {
                axios.post('https://server-side-taupe-beta.vercel.app/logout', {}, {
                    withCredentials: true
                })
                    .then(() => {
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
        changeTheme,
        theme,
        themeActive

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