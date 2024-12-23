import { useEffect, useState } from "react";
import UseAuth from "../AuthProvider/UseAuth";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ManageServices = () => {

    const [manageServices, setManageServices] = useState([]);
    const { user, logOut } = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        
        axios.get(`http://localhost:5000/allServices?email=${user.email}`, {withCredentials: true})
        .then(res => {
            setManageServices(res.data);
        })
    },[user.email])

    useEffect(() =>{
        axios.interceptors.response.use(response =>{
           return response;
        }, error => {
            console.log('error from interceptor');
            if(error.status === 401 || error.status === 403){
               logOut()
               .then(() => {})
               .catch(() => {console.log('error khao mia')})
               
               navigate('/auth/login');
               
            }
           return Promise.reject(error);
        })
    },[logOut, navigate])

    
    return (
        <div>
            <h3 className="text-3xl font-bold text-center my-5">Total Added Books: {manageServices.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Book Details</th>
                            <th>Others</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       
                       {
                        manageServices.map((service, idx) =>  <tr key={idx}>
                            <th>{idx+1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-14 w-14">
                                            <img
                                                src={service.cover}
                                                alt="Book" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service.bookName}</div>
                                        <div className="text-sm opacity-50">{service.author}</div>
                                        <div className="text-xs sopacity-50">{service.price} tk</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {service.area}
                                <br />
                                <span className="badge badge-ghost badge-sm">{service.description.substring(0, 49)}...</span>
                            </td>
                            
                            <th className="flex gap-4 items-center">
                                <button><FiEdit className="text-xl"></FiEdit> </button>
                                <button><MdDeleteForever className="text-red-600 font-bold text-2xl"></MdDeleteForever> </button>
                            </th>
                        </tr>)
                       }
                        
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    );
};

export default ManageServices;