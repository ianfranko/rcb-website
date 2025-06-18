import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', event: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="booking-container">
      <h2>Book an Event or Venue</h2>
      {submitted ? (
        <div className="booking-success">Thank you for your booking! We will contact you soon.</div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <select name="event" value={form.event} onChange={handleChange} required>
            <option value="">Select Event/Venue</option>
            <option value="event1">Event 1</option>
            <option value="event2">Event 2</option>
            <option value="venue1">Venue 1</option>
            <option value="venue2">Venue 2</option>
          </select>
          <button type="submit">Book Now</button>
        </form>
      )}
    </div>
  );
};

export default Booking; 