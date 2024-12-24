import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import useTitle from "../AuthProvider/useTitle";


const AllServices = () => {
     useTitle('Books');
    // const [loader, setloader] = useState();

    // useEffect()

    const loader = useLoaderData();
    console.log(loader);

    return (
        <div className="mx-auto">
            <div className="text-center">
                <h3 className="text-3xl font-bold">All Services</h3>
                <p>find your best deal here...</p>
            </div>
            <div className="w-3/4 mx-auto space-y-10 my-16">
                {
                    loader.map(service => <Services key={service._id} service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default AllServices;