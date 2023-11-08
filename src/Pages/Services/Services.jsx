/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import ServiceCard from "./ServiceCard";

const Services = ({ Home }) => {
    const [services, setServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
console.log(Services);
    useEffect(() => {
        fetch('https://services-server-sooty.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error("Error fetching services:", error));
    }, []);

    const filteredServices = services.filter(service => {
        return service.service_name && service.service_name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Define the animation variant
    const cardVariant = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="search-bar justify-center  flex">
                <input
                    className="p-4 border-2 rounded-box shadow-2xl m-10 "
                    type="text"
                    placeholder="Search by service name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
                {Home
                    ? filteredServices.slice(0, 6).map(service => (
                        <motion.div
                            key={service.service_id}
                            variants={cardVariant} // Use the animation variant
                            initial="hidden"
                            animate="visible"
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))
                    : filteredServices.map(service => (
                        <motion.div
                            key={service.service_id}
                            variants={cardVariant} // Use the animation variant
                            initial="hidden"
                            animate="visible"
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;
