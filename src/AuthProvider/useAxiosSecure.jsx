import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const axiosInstances = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {

    const {logOut} = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstances.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('error from instances');
            if(error.status === 401 || error.status === 403){
                console.log('need to logout');
                logOut()
                .then(res => {
                    console.log("logged out", res.user);
                    navigate('/signIn');
                })
                .catch(() => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: 'something went wrong',
                        
                      });
                })
            }
            return Promise.reject(error);

        })
    },[logOut, navigate])
    return axiosInstances;
}

export default useAxiosSecure;