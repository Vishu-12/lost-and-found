import { apiEndPoint, baseURL } from "../constants";
import { useEffect, useState } from "react";
export default function YourMatches() {
  const [allUserMatches, setAllUserMatches] = useState();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
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
        console.log(data);
        setAllUserMatches(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(allUserMatches);
  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Your Matches page
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allUserMatches?.map((match) => (
            <div
              key={match.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={match.image}
                alt="Design Image"
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
              />
              <div className="p-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                  #{match.type}
                </span>
                <h2 className="text-lg sm:text-xl font-bold mb-2">
                  {match.type === "lost"
                    ? match.lostItem.name
                    : match.foundItem.name}
                </h2>
                <p className="text-gray-700 mb-4">
                  {match.type === "lost"
                    ? match.lostItem.description
                    : match.foundItem.description}
                </p>
                <div className="flex justify-between">
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Confirm
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
