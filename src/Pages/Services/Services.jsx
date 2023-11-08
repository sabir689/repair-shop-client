import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

// eslint-disable-next-line react/prop-types
const Services = ({ Home }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 ">
                {Home
                    ? services.slice(0, 6).map(service => (
                        <ServiceCard key={service.service_id} service={service} />
                    ))
                    : services.map(service => (
                        <ServiceCard key={service.service_id} service={service} />
                    ))
                }
            </div>
           
        </div>
    );
};

export default Services;
