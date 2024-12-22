import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import UseAuth from "../../AuthProvider/UseAuth";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
    const { user, logOut } = UseAuth();
    const links = <div className="flex flex-col lg:flex-row gap-3 items-center font-semibold">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/services'>Services</NavLink>
    </div>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                            {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}

                        </ul>
                    </div>
                    <Link to='/' className="flex flex-col items-center">
                        <img src="https://i.ibb.co.com/c1m6Lv6/judicial-quill-writing-on-open-book-judgment-certificate-or-police-document-education-book-quill-tem.jpg" className="h-full w-16" />
                        {/* <p className=" font-bold">EduElevate</p> */}
                    </Link>
                    <p className="hidden lg:block text-lg font-bold text-[#1E4463]">EduElevate</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                        {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}

                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user && user?.email ? <div className="relative flex flex-col items-center group">
                            <Link>
                                <img src={user.photoURL} className="w-10 h-10 rounded-full border-2 border-green-600" />
                                <p className="absolute w-2 h-2 bg-green-500 rounded-full top-0 right-1"></p>

                                <p className="absolute hidden group-hover:block top-11 font-semibold">{user.displayName}</p>
                            </Link>

                        </div> : <div><IoPersonCircleOutline className="text-4xl"></IoPersonCircleOutline></div>
                    }

                    {/* for login and log-out button */}
                    {
                        user?.email ? <button onClick={()=> logOut()} className="border border-[#EDA655] py-1 px-2 rounded-lg">Log-out</button> : <NavLink to='/auth/login' className="border border-[#EDA655] py-1 px-2 rounded-lg">Login</NavLink>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;