import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateService = () => {

    const loader = useLoaderData();
    const navigate = useNavigate();
    // console.log(loader);

    const handleUpdateService = (e) => {
        e.preventDefault();

        const form = e.target;
        const cover = form.cover.value;
        const bookName = form.name.value;
        const author = form.author.value;
        const type = form.type.value;
        const area = form.area.value;
        const price = form.price.value;
        const description = form.description.value;

        console.log(cover, bookName, author, type, area, price, description);

        const updatedata = {
            cover, bookName, author, type, area, price, description
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You work has been updated",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update It!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.patch(`http://localhost:5000/allServices/${loader._id}`, updatedata)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            title: "Updated!",
                            text: "Your services has been updated.",
                            icon: "success"
                        });
                        navigate('/manageServices')
                    })
            }
        });


    }
    return (
        <div className="px-9 md:px-40 rounded-xl">
            <h3 className="font-bold text-center text-2xl my-5">Update Service: </h3>

            <form onSubmit={handleUpdateService}>

                {/* first coumn */}
                <div className="md:flex gap-3">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Books Cover</span>
                        </label>
                        <input type="url" name='cover' placeholder={loader.cover} className="input input-bordered" />
                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <input type="text" name='name' placeholder={loader.bookName} className="input input-bordered" />
                    </div>
                </div>

                {/* second row */}
                <div className="md:flex gap-3">
                    <div className="form-control w-full md:w-1/2">
                        <label htmlFor="options" className="label">
                            <span className="label-text">Genre:</span>
                        </label>
                        <select id="options" name='type' className="input input-bordered">
                            <option label="" value="">{loader.type}</option>
                            <option value="programming">Programming</option>
                            <option value="web-development">Web Development</option>
                            <option value="english">English</option>
                            <option value="science">Science</option>
                            <option value="others">Others</option>
                        </select>

                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Author</span>
                        </label>
                        <input type="text" name='author' placeholder={loader.author} className="input input-bordered" />
                    </div>
                </div>


                {/* third row */}

                <div className="md:flex gap-3">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>
                        <select id="options" name='area' className="input input-bordered">
                            <option value="">{loader.area}</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="home delivery">home delivery</option>
                            <option value="rangpur">Rangpur</option>
                            <option value="shylhet">Shylhet</option>
                            <option value="rajshahi">Rajshahi</option>
                            <option value="home deliver">Chattogram</option>
                            <option value="barishal">Barishal</option>
                            <option value="mymensingh">Mymensingh</option>
                        </select>


                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' placeholder={loader.price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" placeholder={loader.description} className="input input-bordered"></textarea>

                </div>

                <div className="form-control">
                    <input type="submit" value="Update Info" className="input input-bordered my-7 text-primary-content bg-[#1E4463]" />
                </div>



            </form>
        </div>
    );
};

export default UpdateService;