import { useEffect, useState } from "react";
import { apiEndPoint, baseURL } from "../constants";
import Card from "../components/Card";

export default function Admin() {
  const [allItems, setAllItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}${apiEndPoint.matchApproval}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setAllItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(allItems);

  return (
    <>
      <section className="py-16 bg-gray-100 h-screen pb-20">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Admin page</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-10 pr-10">
            {allItems?.map((item) => (
              <Card
                key={item?.id}
                lostItem={item?.lostItem}
                foundItem={item?.foundItem}
                id={item?.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
