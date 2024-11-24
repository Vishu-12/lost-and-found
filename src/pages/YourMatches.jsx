import React, { useEffect, useState } from "react";
import YourMatchCard from "../components/YourMatchCard";
import { apiEndPoint, baseURL } from "../constants";

export default function YourMatches() {
  const [allUserMatches, setAllUserMatches] = useState();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${baseURL}${apiEndPoint.userMatches}${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        setAllUserMatches(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(allUserMatches);
  return (
    <section className="py-16 bg-gray-100 h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Your Matches page
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {allUserMatches?.lostItems?.map((match) => (
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/200/300"
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
        </div>
      </div>
    </section>
  );
}
