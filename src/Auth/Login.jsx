import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import UseAuth from "../AuthProvider/UseAuth";

const Login = () => {
    const { setUser, loginUser, googleSignIn } = UseAuth();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        loginUser(email, password)
            .then(res => {
                toast.success('successfully login', { position: 'top-center' });
                setUser(res.user);
                console.log(res.user);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
                
            })
            .catch(error => toast.error(error.message, { position: 'top-center' }))
    }


    const handleGoogle = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user);
                toast('successfully register with google',
                    { position: 'top-center' }
                );
                console.log(res.user);
                navigate('/');
            })
    }
    return (
        <div>
            <div>
                <div className="w-11/12 mx-auto p-12">
                    <h2 className="text-center text-2xl font-semibold">Login To Explore</h2>
                    <div className="card bg-base-100 mx-auto max-w-lg shrink-0 border my-5 p-3">
                        <form onSubmit={handleRegister} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-3">
                                <button className="btn bg-[#1E4463] text-white">Login</button>

                            </div>
                        </form>

                        <p className="text-center text-sm">Do not have an account?<Link to='/auth/register' className="text-blue-700 underline font-semibold">Register</Link></p>

                        <button onClick={handleGoogle} className="btn bg-base-300 mt-12 mx-5"><FcGoogle className="text-xl"></FcGoogle> Sign-in With Google</button>
                    </div>

                    <ToastContainer position="top-center"></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Login;