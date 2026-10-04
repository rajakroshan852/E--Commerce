import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(formData);

      alert(res.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Register
      </h1>

      <form onSubmit={handleRegister} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border rounded-lg p-3"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
}