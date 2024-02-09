import { useContext, useState } from 'react';
import { AuthContext } from '../../../utils/provider/AuthProvider';
import useAxiosPublic from '../../../hooks/axiosPublic/useAxiosPublic';

const ScheduleForm = ({ price, id }) => {
  const { user } = useContext(AuthContext)
  const useAxios = useAxiosPublic()
  const currentDate = new Date();
  const localTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  console.log(localTime);
  const localDate = currentDate.toISOString().split('T')[0]; // Getting the date in YYYY-MM-DD format
  const [formData, setFormData] = useState({
    date: localDate,
    time: localTime,
    name: user?.displayName || '',
    phone: '',
    email: user?.email || '',
    message: '',
    property: id,
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
    function extractNumbersFromString(inputString) {
      // Check if the input is already a number
      if (typeof inputString === 'number') {
        // If it's a number, return the same value
        return inputString;
      }
      // Use a regular expression to match numeric characters
      const numericPart = inputString.match(/\d+/g);
      // Join the matched numeric characters into a single string
      const result = numericPart ? numericPart.join('') : '';

      return result;
    }
    const stringWithNumbers = price;
    const numericPart = extractNumbersFromString(stringWithNumbers);
    console.log(numericPart);

    formData.amount = parseInt(numericPart)
    console.log(formData);
    console.log(import.meta.env.VITE_SERVER);
    useAxios.post(`${import.meta.env.VITE_SERVER}/order`, { formData })
      .then(data => {
        console.log(data)
        window.location.href = data.data.url;
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
          type="text"
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
