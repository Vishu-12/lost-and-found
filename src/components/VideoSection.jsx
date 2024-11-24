import React from "react";
import { PlayCircle, Clock, Share2 } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Lost something? lostOfound is the solution!
          </h2>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=700"
              alt="Video thumbnail"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white cursor-pointer" />
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <Clock className="w-6 h-6" />
              <Share2 className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
