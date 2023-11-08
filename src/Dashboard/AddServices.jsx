/* eslint-disable no-unused-vars */

import Swal from 'sweetalert2';
import { AuthContext } from '../FirebaseConfig/AuthProvider';
import { useContext } from 'react';

const AddProductPage = () => {
    const { user } = useContext(AuthContext);
    const handleAddProduct = (event) => {
        event.preventDefault();

        const form = event.target;
        const pictureUrl = form.pictureUrl.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;

        const newAdded = {
            pictureUrl, serviceArea, name: user?.displayName,
            email: user?.email, serviceName, price, description
        }
        console.log(newAdded);

        fetch('https://services-server-sooty.vercel.app/added', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(newAdded)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


        setTimeout(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Service Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool',
            });
            form.reset();
        }, 1000);
    };

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add a Service</h2>
            <form onSubmit={handleAddProduct}>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Picture URL of the Service</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="pictureUrl"
                                placeholder="Picture URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>


                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="serviceName"
                                placeholder="Service Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>


                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                name='name'
                                type="text"
                                defaultValue={user?.displayName}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="email"
                                defaultValue={user?.email}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>




                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="serviceArea"
                                placeholder="Service Area"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>


                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <textarea
                                name="description"
                                placeholder="Description"
                                className="input input-bordered w-full h-24"
                            />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Service" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddProductPage;
