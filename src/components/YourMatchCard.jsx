import React, { useState } from "react";
import { apiEndPoint, baseURL } from "../constants";

export default function YourMatchCard({ allUserMatches }) {
  console.log("jdfjdnfjdn", allUserMatches);
  return (
    <>
      {allUserMatches?.lostItems?.map((match) => (
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://example.com/image.jpg"
            alt="Design Image"
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2">Design Title</h2>
            <p class="text-gray-700 mb-4">Design Description</p>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #DesignType
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
