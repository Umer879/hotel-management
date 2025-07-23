'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function AddRoomDetailsPage() {
  const [formData, setFormData] = useState({

    roomNumber: '',
    roomType: '',
    ac: '',
    meal: '',
    cancellation: '',
    bedCapacity: '',
    phone: '',
    rent: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some((value) => value.trim() === '');
    if (isEmpty) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill all fields!',
        confirmButtonColor: '#d33',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Room Details Added!',
      confirmButtonColor: '#77ba00',
    });

    setFormData({
      roomNumber: '',
      roomType: '',
      ac: '',
      meal: '',
      cancellation: '',
      bedCapacity: '',
      phone: '',
      rent: '',
    });
  };

  const inputClass = 'form-control border-0 border-bottom rounded-0 shadow-none px-0 py-2 input-focus-green';

  return (
    <div className="admin-main add-room">
      <h1 className="mb-4">Add Room Details</h1>
      <div className="bg-white rounded-4 p-4">
        <form onSubmit={handleSubmit} className='room-form'>
          <div className="row g-4">

            {/* Room Number (select) */}
            <div className="col-sm-6 col-12">
              <input
                type="text"
                placeholder="Room Number"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                className={inputClass}
                id='room-input'
              />
            </div>


            {/* Room Type (select) */}
            <div className="col-sm-6 col-12">
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className={inputClass}
                id='room-input'
              >
                <option value="">Select Room Type</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="King">King</option>
                <option value="Suite">Suite</option>
                <option value="Quad">Quad</option>
              </select>
            </div>

            {/* AC/Non AC (select) */}
            <div className="col-sm-6 col-12">
              <select
                name="ac"
                value={formData.ac}
                onChange={handleChange}
                className={inputClass}
                id='room-input'
              >
                <option value="">AC / Non AC</option>
                <option value="AC">AC</option>
                <option value="Non AC">Non AC</option>
              </select>
            </div>

            {/* Meal (select) */}
            <div className="col-sm-6 col-12">
              <select
                name="meal"
                value={formData.meal}
                onChange={handleChange}
                className={inputClass}
                id='room-input'
              >
                <option value="">Meal</option>
                <option value="Included">Included</option>
                <option value="Not Included">Not Included</option>
              </select>
            </div>

            {/* Cancellation Charges (select) */}
            <div className="col-sm-6 col-12">
              <select
                name="cancellation"
                value={formData.cancellation}
                onChange={handleChange}
                className={inputClass}
                id='room-input'
              >
                <option value="">Cancellation Charges</option>
                <option value="Free">Free</option>
                <option value="Non-refundable">Non-refundable</option>
                <option value="50% Refund">50% Refund</option>
              </select>
            </div>

            {/* Bed Capacity (select) */}
            <div className="col-sm-6 col-12">
              <select
                name="bedCapacity"
                value={formData.bedCapacity}
                onChange={handleChange}
                className={inputClass}
                id='room-input'
              >
                <option value="">Bed Capacity</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4+">4+ Persons</option>
              </select>
            </div>

            {/* Telephone Number (input) */}
            <div className="col-sm-6 col-12">
              <input
                type="tel"
                placeholder="Telephone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                id='room-input'
              />
            </div>

            {/* Rent Per Night (input) */}
            <div className="col-sm-6 col-12">
              <input
                type="number"
                placeholder="Rent Per Night (PKR)"
                name="rent"
                value={formData.rent}
                onChange={handleChange}
                className={inputClass}
                id='room-input'
              />
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center">
              <button type="submit" className="globalBtn text-white fw-bold px-5">
                Submit
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
