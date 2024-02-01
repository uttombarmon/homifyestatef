import { useState } from 'react';

const ScheduleForm = () => {
  
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    formData.amount = 4000
    console.log(formData);
    fetch('http://localhost:5000/order',{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      window.location.replace(data.url)
    })
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-10">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="date">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        />

        <label className="block mb-2" htmlFor="time">
          Time:
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        />

        <label className="block mb-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        />

        <label className="block mb-2" htmlFor="phone">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          // pattern="[0-9]{10}"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g., 1234567890"
          className="w-full p-2 mb-4 border rounded-md"
          required
        />

        <label className="block mb-2" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@example.com"
          className="w-full p-2 mb-4 border rounded-md"
          required
        />

        <label className="block mb-2" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Payment
        </button>
      </form>
    </div>
  );
};

export default ScheduleForm;
