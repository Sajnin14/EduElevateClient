import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import UseAuth from "../../AuthProvider/UseAuth";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
    const { user, logOut, changeTheme } = UseAuth();
    const links = <div className="flex flex-col lg:flex-row gap-3 items-center font-semibold mr-2">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/services'>Services</NavLink>
    </div>

    const subLink = <div className="flex flex-col gap-3 font-semibold overflow-visible absolute z-50 bg-base-100 p-3 rounded-xl">
        <NavLink to='/addServices'>Add Service</NavLink>
        <NavLink to='/manageServices'>Manage Service</NavLink>
        <NavLink to='/bookedServices'>Booked-Services</NavLink>
        <NavLink to='/serviceToDo'>Service-To-Do</NavLink>
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
                            {
                                user && user?.email && <li>
                                    <a>Dashboard</a>
                                    <ul className="p-2">
                                        {subLink}
                                    </ul>
                                </li>
                            }

                        </ul>
                    </div>
                    <Link to='/' className="flex flex-col items-center">
                        <img src="https://i.ibb.co.com/c1m6Lv6/judicial-quill-writing-on-open-book-judgment-certificate-or-police-document-education-book-quill-tem.jpg" className="h-full w-16" />
                        {/* <p className=" font-bold">EduElevate</p> */}
                    </Link>
                    <h2 className="hidden lg:block text-lg font-bold text-[#1E4463]">EduElevate</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 relative">
                        {links}
                        {
                            user && user?.email && <li>
                                <details>
                                    <summary className="font-semibold">Dashboard</summary>
                                    <ul className="p-2">
                                        {subLink}
                                    </ul>
                                </details>
                            </li>

                        }

                    </ul>
                </div>
                <div className="navbar-end gap-2">

                    {/* theme starts */}
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox"
                            onChange={() => changeTheme('dark')} 
                            className="theme-controller" value="synthwave" />

                            {/* sun icon */}
                            <svg
                                id='sun'
                                className="swap-off h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                id="moon"
                                className="swap-on h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>

                    {/* theme ends here */}


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
                        user?.email ? <button onClick={() => logOut()} className="border border-[#EDA655] py-1 px-2 rounded-lg">Log-out</button> : <NavLink to='/auth/login' className="border border-[#EDA655] py-1 px-2 rounded-lg">Login</NavLink>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;