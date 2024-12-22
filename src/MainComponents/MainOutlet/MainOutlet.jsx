import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const MainOutlet = () => {
    return (
        <div className="w-11/12 mx-auto space-y-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>   
        </div>
    );
};

export default MainOutlet;