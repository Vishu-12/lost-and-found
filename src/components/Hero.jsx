import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-teal-700 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            We've created 488,042 happy losers!
          </h1>
          <p className="text-xl mb-6">
            iLost reunites people with Lost & Found property
          </p>
          <Link className="bg-yellow-400 text-teal-700 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300">
            I've found something!
          </Link>
        </div>
        <div className="md:w-1/2">
          <image
            src="/placeholder.svg?height=400&width=600"
            alt="Happy mother and daughter"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
