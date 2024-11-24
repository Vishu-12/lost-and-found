import React, { useState } from "react";
import { apiEndPoint, baseURL } from "../constants";

export default function CreateUser() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleItemChange = (e) => {
    setItemData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await fetch(`${baseURL}${apiEndPoint.register}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData?.name,
        email: formData?.email,
        password: formData?.password,
        role: "user",
      }),
    });
    if (response.ok) {
      response = await response.json();

      localStorage.setItem("id", response.id);
      setShowModal(true);
    } else {
      alert("Username or password wrong");
    }
  }

  return (
    <div className="flex justify-center items-center h-auto bg-gray-100 p-4">
      <div className="lg:w-1/2 w-100 bg-white p-8  rounded shadow-md">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Create User</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
    sm:text-sm"
              />
            </div>
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
              {showModal ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                  <div className="relative w-full max-w-lg max-h-full">
                    {/* Modal content */}

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div
                        className="flex items-start justify-between p-4 border-b   
 border-gray-200 rounded-t dark:border-gray-600"
                      >
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          Enter Item Details
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg   
 text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={toggleModal}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                      {/* Modal body */}
                      <div className="container mx-auto px-4 py-8">
                        <div className="mb-4">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <input
                            type="name"
                            id="name"
                            name="name"
                            value={itemData.name}
                            onChange={handleItemChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
    sm:text-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Description
                          </label>
                          <input
                            type="text"
                            id="description"
                            name="description"
                            value={itemData.description}
                            onChange={handleItemChange}
                            className="mt-1   
    block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
    sm:text-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="imageurl"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ImageUrl
                          </label>
                          <input
                            type="text"
                            id="imageurl"
                            name="imageurl"
                            value={itemData.imageUrl}
                            onChange={handleItemChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
    sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Submit
                        </button>
                         
                        <button
                          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg   
 border border-gray-200 text-sm font-medium px-5 py-2.5   
 text-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:border-gray-700"
                          onClick={toggleModal}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
