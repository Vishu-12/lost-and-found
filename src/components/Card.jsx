import React from "react";

export default function Card({ imageSrc, title, description }) {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md">
      <img src={imageSrc} className="w-100 h-100 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
