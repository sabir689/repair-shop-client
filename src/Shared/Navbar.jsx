import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../FirebaseConfig/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    };
    const navLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allServices"> All Services</Link></li>

        {user?.email ? <>
            <li><Link to={"/bookings"}>My bookings</Link></li>
            <li><Link to="/addServices"> Add Services</Link></li>
            <li><Link to={"/manageServices"}>Manage Services</Link></li>

            <li> <button onClick={handleSignOut} >Sign Out</button></li>
        </> :
            <li> <Link to="/login">
                <button>Sign In</button>
            </Link></li>
        }



    </>

    return (
        <div className="navbar bg-base-100 mx-auto m-5 border-2 rounded-2xl shadow-2xl p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52">
                        {navLink}
                       



                    </ul>
                </div>
                <div className="flex"> 
                    <img className="h-16 rounded-box" src="https://i.ibb.co/rdYntSQ/logo.webp " alt="" />
                <a className="btn btn-ghost normal-case text-xl">Repair Cafe</a>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                   
                </ul>
            </div>

            <div className="navbar-end">


                <li className="border-2 p-4 rounded-2xl"> Appointment </li>

            </div>
        </div>
    );
};

export default Navbar;