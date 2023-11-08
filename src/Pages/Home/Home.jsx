import { Link } from "react-router-dom";
import Services from "../Services/Services";
import Banner from "./Banner";
import { motion } from "framer-motion";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="border-2 p-8 rounded-2xl">
                <Services Home={true} />
            </div>
            <Link to={"allServices"}>
                <div className="justify-center flex mb-10 mt-10">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-primary"
                    >
                        All Services
                    </motion.button>
                </div>
            </Link>

            <div className="hero min-h-screen rounded-2xl shadow-2xl border-2 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/9bHhF78/ser6.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Professional Repair Services</h1>
                        <p className="py-6">We provide top-notch repair services for all your needs. Trust us for quality repairs and quick solutions to your problems.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>



            </div>
            <div className="flex mx-auto p-8 border-2 rounded-2xl mt-10">
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://i.ibb.co/dDBfJ8H/section.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h2 className="text-2xl font-bold mb-2">Repair</h2>
                        <p className="mb-4 text-3xl">
                            Grab the offer
                        </p>
                        <div className="countdown-grid grid grid-cols-4 gap-4 text-4xl font-mono mb-4">
                            <div className="flex flex-col items-center">
                                <span style={{ "--value": 15 }}>15</span>
                                <span>days</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span style={{ "--value": 10 }}>10</span>
                                <span>hours</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span style={{ "--value": 24 }}>24</span>
                                <span>min</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span style={{ "--value": 53 }}>53</span>
                                <span>sec</span>
                            </div>
                        </div>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="stats shadow-2xl border-2 p-8 ml-60 mt-10 mb-10">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://i.ibb.co/Tb1ZPpV/repair-man-2.png" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>
            
        </div>
    );
};

export default Home;

