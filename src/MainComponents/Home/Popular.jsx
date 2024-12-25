import axios from "axios";
import { useEffect, useState } from "react";
import Services from "../../Pages/Services";
import { Link } from "react-router-dom";

const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        axios.get('https://server-side-taupe-beta.vercel.app/allServices')
            .then(res => {
                setPopular(res.data.result);
            })
    }, [])

    const topPopularData = popular.sort((a, b) => a.price - b.price).slice(0, 4);


    return (
        <div className="mx-auto">

            <h3 className="font-bold text-3xl my-2 text-center text-[#1E4463]"> Popular Deal</h3>
            <p className='italic text-center'>Buy your books at a budget friendly price</p>

            <div className="w-5/6 mx-auto my-14">
                {
                    topPopularData.map(service => <Services key={service._id} service={service}></Services>)
                }
            </div>

            <div className="text-center">
                <Link to='/services'><button className="btn bg-[#EDA655] mt-10 mb-10">See All Services</button></Link>
            </div>

        </div>
    );
};

export default Popular;