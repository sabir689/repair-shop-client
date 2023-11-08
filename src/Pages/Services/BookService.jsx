import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../FirebaseConfig/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const BookService = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const {
        provider_name,
        service_name,
        service_image,
        price_amount,
    } = service;

    const handleBookService = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            photo: service_image,
            date,
            provider: provider_name,
            service: service_name,
            service_id: service._id,
            price: price_amount,
        };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Service Booked',
                    text: 'Service booked successfully',
                })
                .then(() => {
                   
                    window.location.href = '/bookings';
                });
            }
        });
    };

    return (
        <div>
            <h2 className='text-center text-3xl'>Book Service</h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" defaultValue={service_image} name="image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Provider</span>
                        </label>
                        <input type="text" name="email" defaultValue={provider_name} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={price_amount} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body"></div>
        </div>
    );
};

export default BookService;
