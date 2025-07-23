'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function ViewRoomsPage() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomNumber: '101',
      roomType: 'King',
      ac: 'AC',
      meal: 'Included',
      bedCapacity: '2',
      phone: '03001234567',
      rent: '8000',
    },
    {
      id: 2,
      roomNumber: '202',
      roomType: 'Double',
      ac: 'Non AC',
      meal: 'Not Included',
      bedCapacity: '3',
      phone: '03001230000',
      rent: '6000',
    },
    {
      id: 3,
      roomNumber: '303',
      roomType: 'Suite',
      ac: 'AC',
      meal: 'Included',
      bedCapacity: '4+',
      phone: '03005551234',
      rent: '12000',
    },
  ]);

  const handleEdit = (id) => {
    Swal.fire('Edit Mode', `You selected room ID: ${id}`, 'info');
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This room will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#77ba00',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setRooms(rooms.filter((room) => room.id !== id));
        Swal.fire('Deleted!', 'The room has been deleted.', 'success');
      }
    });
  };

  return (
    <section className="py-5 admin-main">
      <h2 className="mb-4">All Bookings</h2>
      <div className="custom-table-responsive">
        <table className="table table-bordered table-hover text-center align-middle custom-table-width">
          <thead>
            <tr>
              <th>#</th>
              <th>Room Number</th>
              <th>Type</th>
              <th>AC/Non AC</th>
              <th>Meal</th>
              <th>Bed Capacity</th>
              <th>Phone</th>
              <th>Rent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={room.id}>
                <td>{index + 1}</td>
                <td>{room.roomNumber}</td>
                <td>{room.roomType}</td>
                <td>{room.ac}</td>
                <td>{room.meal}</td>
                <td>{room.bedCapacity}</td>
                <td>{room.phone}</td>
                <td>{room.rent} PKR</td>
                <td className='edit'>
                  <button
                    className="btn btn-sm btn-info  icon-button me-2"
                    onClick={() => handleEdit(room.id)}
                  >
                    <FaEdit className="icon" />
                  </button>
                  <button
                    className="btn btn-sm bg-danger text-white icon-button"
                    onClick={() => handleDelete(room.id)}
                  >
                    <FaTrash className="icon" />
                  </button>
                </td>
              </tr>
            ))}
            {rooms.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center text-muted">
                  No rooms found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
