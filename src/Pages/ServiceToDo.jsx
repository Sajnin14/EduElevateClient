import { useEffect, useState } from "react";
import UseAuth from "../AuthProvider/UseAuth";
import axios from "axios";
import useAxiosSecure from "../AuthProvider/UseAxiosSecure";


const ServiceToDo = () => {

    const [serviceToDo, setServiceToDo] = useState([]);
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        // axios.get(`http://localhost:5000/purchaseServices/service/${user.email}`, {withCredentials: true})
        // .then(res => {
        //     setServiceToDo(res.data)
        // })

        if (user) {
            axiosSecure.get(`/purchaseServices/service/${user.email}`)
                .then(res => setServiceToDo(res.data))
        }
    }, [axiosSecure, user])

// useEffect(() =>{
//     axios.interceptors.response.use(response =>{
//        return response;
//     }, error => {
//         console.log('error from interceptor');
//         if(error.status === 401 || error.status === 403){
//            logOut()
//            .then(() => {})
//            .catch(() => {console.log('error khao mia')})

//            navigate('/auth/login');

//         }
//        return Promise.reject(error);
//     })
// },[logOut, navigate])


const handleStatus = (e, id) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value, id);
    const data = {
        serviceStatus: value
    }

    axios.patch(`http://localhost:5000/purchaseServices/${id}`, data)
        .then(res => {
            console.log(res.data);
        })
}
return (
    <div>
        <h3 className="text-3xl font-bold text-center my-5">Total Response to your Service: {serviceToDo.length}</h3>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>index</th>
                        <th>Book Details</th>
                        <th>Purchase Details</th>
                        <th>Delivery Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        serviceToDo.map((service, idx) => <tr key={idx}>
                            <th>{idx + 1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-14 w-14">
                                            <img
                                                src={service.serviceImage}
                                                alt="Book" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service.serviceName}</div>
                                        <div className="text-sm opacity-50">{service.serviceAuthor}</div>
                                        <div className="text-xs sopacity-50">{service.price} tk</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Name: {service.userName}</p>
                                <p>{service.userEmail}</p>
                            </td>
                            <td>
                                Address: {service.address}
                                <br />
                                <span className="badge badge-ghost badge-sm">Date: {service.serviceDate}</span>
                            </td>

                            <th>
                                <select onChange={(e) => handleStatus(e, service._id)} className="select select-bordered select-xs w-full max-w-xs">
                                    <option defaultValue={service.serviceStatus || 'pending'}>{service.serviceStatus}</option>
                                    <option>Pending</option>
                                    <option>Working</option>
                                    <option>Completed(delivered)</option>
                                </select>
                            </th>
                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    </div>
);
};

export default ServiceToDo;