'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function BookingNewPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    mobile: '',
    city: '',
    arrive: '',
    depart: '',
    persons: '',
    roomType: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation: Check if any field is empty
    const isEmpty = Object.values(formData).some((value) => value.trim() === '');
    if (isEmpty) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill all fields!',
        confirmButtonColor: '#d33',
      });
      return;
    }

    // ✅ Show success alert
    Swal.fire({
      icon: 'success',
      title: 'Booking Submitted!',
      confirmButtonColor: '#77ba00',
    });

    // ✅ Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      mobile: '',
      city: '',
      arrive: '',
      depart: '',
      persons: '',
      roomType: '',
      address: '',
    });

    // ✅ Reset date type for inputs
    setDateType("text");
  };

  const [dateType, setDateType] = useState("text");

  const inputClass =
    'form-control border-0 border-bottom rounded-0 shadow-none px-0 py-2 input-focus-green';

  return (
    <div className="admin-main add-room">
      <h1 className="mb-4">Add Room Booking</h1>
      <div className="bg-white rounded-4 p-4">
        <form onSubmit={handleSubmit} className='room-form'>
          <div className="row g-4">
            <div className="col-sm-6 col-12">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={inputClass}
                id='room-input'
              />
            </div>

            <div className="col-sm-6 col-12">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={inputClass}
                 id='room-input'
              />
            </div>

            <div className="col-sm-6 col-12">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                 id='room-input'
              />
            </div>

            <div className="col-sm-6 col-12">
              <input
                type="text"
                placeholder="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={inputClass}
                 id='room-input'
              />
            </div>

            <div className="col-sm-6 col-12">
              <input
                type="tel"
                placeholder="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={inputClass}
                 id='room-input'
              />
            </div>

            <div className="col-sm-6 col-12">
              <input
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={inputClass}
                 id='room-input'
              />
            </div>

            <div className="col-sm-6 col-12">
              <input
                type={dateType}
                onFocus={() => setDateType("date")}
                onBlur={() => formData.arrive ? setDateType("date") : setDateType("text")}
                placeholder="Arrive"
                name="arrive"
                value={formData.arrive}
                onChange={handleChange}
                className={inputClass}
                 id='room-input'
              />
            </div>

            <div className="col-sm-6 col-12">
              <input
                type={dateType}
                onFocus={() => setDateType("date")}
                onBlur={() => formData.depart ? setDateType("date") : setDateType("text")}
                placeholder="Depart"
                name="depart"
                value={formData.depart}
                onChange={handleChange}
                className={inputClass}
                 id='room-input'
              />
            </div>

            <div className="col-sm-6 col-12">
              <select
                name="persons"
                value={formData.persons}
                onChange={handleChange}
                className={inputClass}
                 id='room-input'
              >
                <option value="">No of Persons</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-6 col-12">
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className={inputClass}
                 id='room-input'
              >
                <option value="">Room Type</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="King">King</option>
                <option value="Suite">Suite</option>
                <option value="Quad">Quad</option>
              </select>
            </div>

            <div className="col-12">
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={inputClass}
                 id='room-input'
              />
            </div>

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
