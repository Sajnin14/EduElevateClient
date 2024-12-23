
import { useLoaderData, useNavigate } from "react-router-dom";
import UseAuth from "../AuthProvider/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const SingleService = () => {
    const navigate = useNavigate();
    const loader = useLoaderData();
    const { user } = UseAuth();
    console.log({ user });
    


    console.log(loader._id);
    const handlePurchase = e => {
        e.preventDefault();
        const serviceDate = e.target.date.value;
        const address = e.target.address.value;

        const purchaseInfo = {
            userName: user.displayName,
            userEmail: user.email,
            serviceId: loader._id,
            serviceName : loader.name,
            serviceImage : loader.cover,
            providerEmail : loader.providerEmail,
            providername : loader.providername,
            price: loader.price,
            serviceStatus: 'Pending',
            serviceDate,
            address
        }

        console.log(purchaseInfo);
        axios.post('http://localhost:5000/purchaseServices', purchaseInfo)
        .then(res =>{
            console.log(res.data);
            Swal.fire({
                icon: "success",
                title: "Your purchase hase been saved",
                showConfirmButton: false,
                timer: 1500
              });
            navigate('/services');
         })

    }
    return (
        <div>
            <p className="font-bold text-2xl mb-5 text-center">Book Provider Information: </p>
            <div className="w-2/3 md:w-1/2 p-5 rounded-xl mx-auto text-center border-2 border-[#1E4463] shadow-lg mb-16">

                <div className="avatar indicator mx-auto">
                    <span className="indicator-item badge badge-secondary">{loader.providername}</span>
                    <div className="h-20 w-20 rounded-lg">
                        <img
                            src={loader.providerPhoto} />
                    </div>
                </div>
                <p><span className="font-semibold">Service Location:</span> {loader.area}</p>
                <p><span className="font-semibold">Provider Email:</span> {loader.providerEmail}</p>
            </div>

            <p className="font-bold text-2xl mb-5 text-center">Details About the Book: </p>
            <div className="card bg-base-100 w-2/3 md:w-1/2 mx-auto shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={loader.cover}
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{loader.bookName}</h2>
                    <p className="font-semibold">Author: {loader.author}</p>
                    <p>Type: {loader.type}</p>
                    <p>{loader.description}</p>
                    <p className='font-semibold'>Provider:</p>
                    <div className='flex gap-2 items-center'>
                        <img src={loader.providerPhoto} className='w-10 h-10 border border-[#1E4463] rounded-full' alt="" />

                        <p> {loader.providername}</p>
                    </div>
                    <p className="font-semibold text-lg">Price: {loader.price}</p>
                    <div className="card-actions">
                        <button onClick={() => document.getElementById('bookNowModal').showModal()} className="btn bg-[#1E4463] text-base-100">Book Now</button>
                    </div>
                </div>
            </div>


            {/* modal for book now */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="bookNowModal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handlePurchase}>

                        {/* first row */}
                        <div className="md:flex gap-3">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">ServiceId</span>
                                </label>
                                <input type="text" value={loader._id} name='id' placeholder={loader._id} className="input input-bordered" readOnly />
                            </div>

                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" value={loader.bookName} name='name' placeholder={loader.bookName} className="input input-bordered" readOnly />
                            </div>
                        </div>

                        {/* second row */}
                        <div className="md:flex gap-3">
                            <div className="form-control w-full md:w-1/2">
                                <label htmlFor="options" className="label">
                                    <span className="label-text">Service Image</span>
                                </label>
                                <input type="url" value={loader.cover} name='name' placeholder={loader.cover} className="input input-bordered" readOnly />


                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Provider email</span>
                                </label>
                                <input type="email" name='email' placeholder={loader.providerEmail}
                                    value={loader.providerEmail} className="input input-bordered" readOnly />
                            </div>
                        </div>


                        {/* third row */}

                        <div className="md:flex gap-3">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Provider Name</span>
                                </label>
                                <input type="text" value={loader.providername} name='name' placeholder={loader.providername} className="input input-bordered" readOnly />
                            </div>

                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Current User email</span>
                                </label>
                                <input type="email" name='userEmail' placeholder={user.email}
                                    value={user.email} className="input input-bordered" readOnly />
                            </div>
                        </div>


                        {/* 4th row */}
                        <div className="md:flex gap-3">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Current User Name</span>
                                </label>
                                <input type="text" name='userName' placeholder={user.displayName}
                                    value={user.displayName} className="input input-bordered" readOnly />
                            </div>

                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Service Taking Date</span>
                                </label>
                                <input type="date" name='date' placeholder="Enter Your books Taking Date"
                                    className="input input-bordered" required />
                            </div>
                        </div>

                        {/* 4+1 row */}
                        <div className="md:flex gap-3">

                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>

                                <input type="text" name='address' placeholder="Enter Your address"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' placeholder={loader.price}
                                    value={loader.price} className="input input-bordered" readOnly />
                            </div>

                        </div>



                        <div className="form-control">
                            <input type="submit" value="Purchase Now" className="input input-bordered my-7 text-primary-content bg-[#1E4463]" />
                        </div>



                    </form>
                    <div className="modal-action text-center">
                        <form method="dialog text-center">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SingleService;