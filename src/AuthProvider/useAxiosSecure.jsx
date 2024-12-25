import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const axiosInstances = axios.create({
    baseURL: 'https://server-side-taupe-beta.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {

    const {logOut} = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstances.interceptors.response.use(response => {
            return response;
        }, error => {
            toast.error('error from instances');
            if(error.status === 401 || error.status === 403){
                logOut()
                .then(res => {
                    toast.error("logged out", res.user);
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