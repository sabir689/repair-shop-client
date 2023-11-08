import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseConfig/AuthProvider";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        try {
            await signIn(email, password);
            console.log("Login successful");
            setLoginError(null);
            navigate(location?.state ? location.state.from : "/");
        } catch (error) {
            console.error(error);

            if (error.code === "auth/wrong-password") {
                setLoginError("Password doesn't match. Please try again.");
            } else if (error.code === "auth/user-not-found") {
                setLoginError("Email doesn't match. Please try again.");
            } else {
                setLoginError("An error occurred. Please try again later.");
            }
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            console.log("Google Login successful");
            setLoginError(null);
            navigate(location?.state ? location.state.from : "/");
        } catch (error) {
            console.error(error);

        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={'https://i.ibb.co/CzmFV3w/login-4x.png'} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {loginError && <p className="text-red-500">{loginError}</p>}
       
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className="form-control mt-6 border-2 rounded-xl">
                                <button onClick={handleGoogleLogin} className="btn btn-primary">
                                    Sign In with Google
                                </button>
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/register">Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
