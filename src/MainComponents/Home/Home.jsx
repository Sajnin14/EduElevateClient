import useTitle from "../../AuthProvider/useTitle";
import Banner from "./Banner";

const Home = () => {
    useTitle("home");
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;