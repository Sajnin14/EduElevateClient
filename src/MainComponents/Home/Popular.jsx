import axios from "axios";
import { useEffect, useState } from "react";
import Services from "../../Pages/Services";
import { Link } from "react-router-dom";

const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allServices')
            .then(res => {
                setPopular(res.data.result);
            })
    }, [])

    const topPopularData = popular.sort((a, b) => b.price - a.price).slice(0, 3);


    return (
        <div className="w-2/3 mx-auto">

            <h3 className="font-bold text-3xl my-2 text-center text-[#1E4463]"> Popular Deal</h3>
            <p className='italic text-center'>Buy your books at a budget friendly price</p>

            <div className="my-14">
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