'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';


export default function BookingPage() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: 'Ali Khan',
      mobile: '03001234567',
      email: 'ali@example.com',
      arrive: '2025-08-01',
      depart: '2025-08-05',
      roomType: 'Deluxe',
      payment: 'Paid',
    },
    {
      id: 2,
      name: 'Sara Ahmed',
      mobile: '03009876543',
      email: 'sara@example.com',
      arrive: '2025-08-03',
      depart: '2025-08-07',
      roomType: 'Standard',
      payment: 'Pending',
    },
      {
      id: 3,
      name: 'Umer Gul',
      mobile: '03009876543',
      email: 'umar@example.com',
      arrive: '2025-08-03',
      depart: '2025-08-07',
      roomType: 'Standard',
      payment: 'Paid',
    },
  ]);

  const handleEdit = (id) => {
    Swal.fire('Edit Mode', `You selected booking ID: ${id}`, 'info');
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#77ba00',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setBookings(bookings.filter((b) => b.id !== id));
        Swal.fire('Deleted!', 'The booking has been deleted.', 'success');
      }
    });
  };

  return (
    <section className="py-5 admin-main">
      <h2 className="mb-4">All Bookings</h2>
      <div className="custom-table-responsive">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Arrive</th>
              <th>Depart</th>
              <th>Room Type</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.mobile}</td>
                <td>{booking.email}</td>
                <td>{booking.arrive}</td>
                <td>{booking.depart}</td>
                <td>{booking.roomType}</td>
                <td>
                  <span
                    className={`badge ${
                      booking.payment === 'Paid'
                        ? 'bg-success'
                        : 'bg-warning text-dark'
                    }`}
                  >
                    {booking.payment}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-info icon-button me-2"
                    onClick={() => handleEdit(booking.id)}
                  >
                    <FaEdit className="icon" />
                  </button>
                  <button
                    className="btn btn-sm bg-danger text-white icon-button"
                    onClick={() => handleDelete(booking.id)}
                  >
                    <FaTrash className="icon" />
                  </button>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center text-muted">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
