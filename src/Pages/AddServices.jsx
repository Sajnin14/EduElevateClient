
const AddServices = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const cover = form.cover.value;
        const bookName = form.name.value;
        const type = form.type.value;
        const author = form.author.value;
        const area = form.area.value;
        const price = form.price.value;
        const description = form.description.value;

        console.log(cover, bookName, type, author, area, price, description);
    }
    return (
        
            <div className="px-9 md:px-40 rounded-xl">
                <h3 className="font-bold text-center text-2xl my-5">Add Books</h3>

                <form onSubmit={handleAddService}>

                    {/* first coumn */}
                    <div className="md:flex gap-3">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Books Cover</span>
                            </label>
                            <input type="url" name='cover' placeholder="enter cover image" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <input type="text" name='name' placeholder="enter the book name" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* second row */}
                    <div className="md:flex gap-3">
                        <div className="form-control w-full md:w-1/2">
                            <label htmlFor="options" className="label">
                                <span className="label-text">Genre:</span>
                            </label>
                            <select id="options" name='type' className="input input-bordered" required>
                                <option label="" value="">Select One</option>
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
                            <input type="text" name='author' placeholder="name of the author" className="input input-bordered" required />
                        </div>
                    </div>


                    {/* third row */}

                    <div className="md:flex gap-3">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Area</span>
                            </label>
                            <select id="options" name='area' className="input input-bordered" required>
                                <option value="">select area</option>
                                <option value="dhaka">Dhaka</option>
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
                            <input type="number" name='price' placeholder="price of the book" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" className="input input-bordered" required></textarea>

                    </div>

                    <div className="form-control">
                        <input type="submit" value="Add Book" className="input input-bordered my-7 text-primary-content bg-[#1E4463]" />
                    </div>



                </form>
            </div>
    );
};

export default AddServices;