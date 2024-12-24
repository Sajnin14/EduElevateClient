import { useEffect, useState } from "react";
import UseAuth from "../AuthProvider/UseAuth";
import useAxiosSecure from "../AuthProvider/UseAxiosSecure";
import useTitle from "../AuthProvider/useTitle";


const BookedServices = () => {
    useTitle('purchase');
    const [bookedServices, setBookesdServices] = useState([]);
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        // fetch(`http://localhost:5000/purchaseServices?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookesdServices(data);
        //         console.log(data);
        //     })

        // axios.get(`http://localhost:5000/purchaseServices?email=${user.email}`, {withCredentials: true})
        // .then(res => {
        //     setBookesdServices(res.data);
        // })

        if (user) {
            axiosSecure.get(`/purchaseServices/service/${user.email}`)
                .then(res => setBookesdServices(res.data))
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

    if (!bookedServices.length) {
        return (
            <div className="w-11/12 mx-auto h-72 bg-gray-300 flex items-center justify-center">
                <p className="text-2xl font-bold text-red-700">No Services added by you</p>
            </div>
        )
    }

    return (
        <div>
            <h3 className="text-3xl font-bold text-center my-5">Total Booked Books: {bookedServices.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Book Details</th>
                            <th>Date</th>
                            <th>Provider Info</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            bookedServices.map((service, idx) => <tr key={idx}>
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
                                    {service.area}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{service.serviceDate}</span>
                                </td>

                                <td>
                                   <p> {service.providername}</p>
                                   <p>{service.providerEmail}</p>
                                </td>

                                <th>
                                    <span className="badge badge-ghost badge-sm">{service.serviceStatus}</span>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default BookedServices;