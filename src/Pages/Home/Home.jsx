import { Link } from "react-router-dom";
import Services from "../Services/Services";
import Banner from "./Banner";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services Home={true}></Services>
            <Link to={"allServices"}>
                <div className="justify-center flex mb-10">
                    <button className="btn btn-primary">All Services</button>
                </div></Link>
                <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
        <img src="https://i.ibb.co/9bHhF78/ser6.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
            <h1 className="text-5xl font-bold">Professional Repair Services</h1>
            <p className="py-6">We provide top-notch repair services for all your needs. Trust us for quality repairs and quick solutions to your problems.</p>
            <button className="btn btn-primary">Get Started</button>
        </div>
    </div>
</div>

        </div>
    );
};

export default Home;