/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";

import Swal from 'sweetalert2';

import { AuthContext } from "../../FirebaseConfig/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `https://services-server-sooty.vercel.app/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);

    const handleDelete = (id) => {
        Swal.fire({
          title: 'Are you sure you want to delete?',
          text: 'This action cannot be undone.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it',
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://services-server-sooty.vercel.app/bookings/${id}`, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire('Deleted successful', '', 'success');
                  const remaining = bookings.filter((booking) => booking._id !== id);
                  setBookings(remaining);
                }
              })
              .catch((error) => {
                Swal.fire('Error', 'An error occurred while deleting.', 'error');
              });
          }
        });
      };
      

    const handleBookingConfirm = id => {
        fetch(`https://services-server-sooty.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                   
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div>
            <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            
                            <th>Image&name</th>
                            <th>Provider</th>
                            <th>Date</th>
                            <th>email</th>
                            <th>Price</th>
                            <th>Status</th>

                         
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;