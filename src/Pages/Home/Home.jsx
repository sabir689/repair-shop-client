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
        </div>
    );
};

export default Home;