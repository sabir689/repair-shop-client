
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../FirebaseConfig/AuthProvider";



const UpdateAdded = () => {
    const { user } = useContext(AuthContext);
 

    const added = useLoaderData();
   const { _id, pictureUrl, serviceArea,  serviceName, price, description } = added;

    const handleUpdateAdded = event => {
        event.preventDefault();

        
        const form = event.target;
        const pictureUrl = form.pictureUrl.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        
        const updatedAdded={pictureUrl,serviceArea,name: user?.displayName, 
        email: user?.email,serviceName,price,description}

        // send data to the server
        fetch(`https://services-server-sooty.vercel.app/added/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Use 'Content-Type' instead of 'content-type'
            },
            body: JSON.stringify(updatedAdded),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'No service was updated',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
        
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add a Service:{serviceName}</h2>
            <form onSubmit={handleUpdateAdded}>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Picture URL of the Service</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="pictureUrl"
                                defaultValue={pictureUrl}
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
                                defaultValue={serviceName}
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
                                defaultValue={price}
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
                                defaultValue={serviceArea}
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
                                defaultValue={description}
                                placeholder="Description"
                                className="input input-bordered w-full h-24"
                            />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Service" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateAdded;




