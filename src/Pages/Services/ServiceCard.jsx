/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id, service_name, service_image, service_description, view_detail_button, provider_name, provider_image, price_amount } = service;

    return (
        <div className="card h-96  bg-base-100 shadow-xl image-full">
            <figure>
                <img src={service_image} alt={service_name} />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title font-bold text-2xl">{service_name}</h2>
                <p className="text-xl">{service_description}</p>

                <div className="service-provider">
                    <img src={provider_image} alt={provider_name} className="provider-image h-36 rounded-full" />
                    <p className="provider-name text-center">{provider_name}</p>
                </div>
                <div className="service-price items-center">
                    <p className="text-xl text-orange-500">Price: {price_amount}</p>
                </div>
                <Link to={`/details/${_id}`}>
                   <div className="card-actions justify-center">
                       <button className="btn btn-primary">{view_detail_button}</button>
                   </div>
               </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
