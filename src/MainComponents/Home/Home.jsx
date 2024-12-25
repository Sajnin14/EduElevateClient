import useTitle from "../../AuthProvider/useTitle";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Course from "./Course";
import Popular from "./Popular";

const Home = () => {
    useTitle("home");
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <Popular></Popular>
            <Course></Course>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;