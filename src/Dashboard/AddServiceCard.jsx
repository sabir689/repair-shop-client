/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddServiceCard = ({ added,addeds, setAddeds }) => {

    const { _id, pictureUrl, serviceArea, name, serviceName, price, description } = added;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://services-server-sooty.vercel.app/added/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Service has been deleted.',
                                'success'
                            )
                            const remaining = addeds.filter(add => add._id !== _id);
                            setAddeds(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={pictureUrl} alt="Service" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-gray-600">Service Area: {serviceArea}</p>
                <p className="text-gray-600">Service Name: {serviceName}</p>
                <p className="text-gray-600">Price: ${price}</p>
                <p className="text-gray-600">Description: {description}</p>
                <div className="card-actions justify-end">


                    <Link  to={`/updateAdded/${_id}`}>
                            <button className="btn">Update</button>
                        </Link>
                        
                  
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-pink-500">Delete</button>
                </div>
            </div>
        </div>


    );
};

export default AddServiceCard;
