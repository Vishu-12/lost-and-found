import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function CustomRating() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Our customers rate our service with a 4.5 out of 5
        </h2>
        <div className="flex justify-center mb-8">
          {[1, 2, 3, 4].map((_, index) => (
            <Star
              key={index}
              className="w-8 h-8 text-yellow-400 fill-current"
            />
          ))}
          <Star className="w-8 h-8 text-gray-300" />
        </div>
        <p className="text-xl mb-8">Super</p>
        <p className="mb-8 max-w-2xl mx-auto">
          Register your valuables with iSave. So you can start searching from
          the moment you lose something.
        </p>
        <Link className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300">
          Register your valuable
        </Link>
      </div>
    </section>
  );
}
