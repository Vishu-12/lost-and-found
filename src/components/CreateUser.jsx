import React, { useState } from "react";
import { apiEndPoint, baseURL } from "../constants";

export default function CreateUser() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await fetch(`${baseURL}${apiEndPoint.register}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData?.email,
        password: formData?.password,
        role: "user",
      }),
    });
    if (response.ok) {
      response = await response.json();
      window.location.assign("/");
    } else {
      alert("Username or password wrong");
    }
    console.log(formData);
  }

  return (
    <div className="flex justify-center items-center h-auto bg-gray-100 p-4">
      <div className="lg:w-1/2 w-100 bg-white p-8  rounded shadow-md">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Create User</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1   
    block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
    sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
    sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-teal-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
