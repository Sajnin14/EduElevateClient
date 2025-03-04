import { useEffect, useState } from "react";
import UseAuth from "../AuthProvider/UseAuth";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import useTitle from "../AuthProvider/useTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../AuthProvider/useAxiosSecure";


const ManageServices = () => {

    useTitle('manage');

    const [manageServices, setManageServices] = useState([]);
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {

        if (user) {
            axiosSecure.get(`/allServices?email=${user.email}`)
                .then(res => setManageServices(res.data.result))
        }
    }, [axiosSecure, user])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                if (user) {
                    axiosSecure.delete(`/allServices/${id}`)
                        .then(() => {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = manageServices.filter( manage => manage._id !== id);
                        setManageServices(remaining);

                    })
                }

            }
        });

    }

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
                            manageServices.map((service, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
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
                                    <Link to={`/updateService/${service._id}`}>                                <button><FiEdit className="text-xl"></FiEdit> </button> </Link>

                                    <button onClick={() => handleDelete(service._id)}><MdDeleteForever className="text-red-600 font-bold text-2xl"></MdDeleteForever> </button>
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