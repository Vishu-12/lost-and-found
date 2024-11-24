import React from "react";
import { apiEndPoint, baseURL } from "../constants";

export default function Card({ imageSrc, title, description, type, id }) {
  async function handleApproved(e) {
    e.preventDefault();

    const response = await fetch(`${baseURL}${apiEndPoint.approved}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matchId: id,
        approved: true,
      }),
    });

    const data = await response.json();
  }
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md">
      <img src={imageSrc} className="w-100 h-100 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <h3 className="text-md font-bold mb-2">{type}</h3>

        <button className="p-2 border" onClick={handleApproved}>
          Approved
        </button>
      </div>
    </div>
  );
}
