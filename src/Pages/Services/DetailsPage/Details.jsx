
import { useLoaderData } from "react-router-dom";

import BookService from "../BookService";

const Details = () => {
    const service = useLoaderData();
    const {
        service_name,
        service_image,
        service_description,

        provider_name,
        provider_image,
        price_amount,
    } = service;

    return (

        <div>
          <div className="bg-base-100 min-h-screen flex items-center justify-center border-2">
    <div className="max-w-screen-md bg-base shadow-lg rounded-xl p-6 border-4">
        <div className="flex justify-between">
            <div className="w-1/2">
                <figure>
                    <img src={provider_image} alt="Provider" className="rounded-xl w-48 h-48" />
                </figure>
                <div className="mt-4 text-center">
                    <h2 className="text-2xl font-semibold">{provider_name}</h2>
                    <p className="text-gray-600">I can repair everything u need</p>
                    <div className="mt-4">
                        <button className="btn btn-primary">${price_amount}</button>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <div className="card card-compact bg-base-100  p-4">
                    <figure>
                        <img src={service_image} alt="Service" className="rounded-xl w-48 h-48" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-semibold">{service_name}</h2>
                        <p className="text-gray-600">{service_description}</p>
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-primary"
                                onClick={() => document.getElementById('my_modal_5').showModal()}
                            >
                                Book Now
                            </button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <BookService />
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => document.getElementById('my_modal_5').close()}
                                            >
                                                Close
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


        </div>

    );
};

export default Details;
