import useTitle from "../../AuthProvider/useTitle";
import Banner from "./Banner";
import Popular from "./Popular";

const Home = () => {
    useTitle("home");
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <Popular></Popular>
        </div>
    );
};

export default Home;