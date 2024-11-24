import React, { useEffect, useState } from "react";
import { apiEndPoint, baseURL } from "../constants";
import Card from "../components/Card";

export default function Admin() {
  const [allUsers, setAllUsers] = useState();
  // useEffect(() => {
  //   let response = fetch(`${baseURL}${apiEndPoint.register}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   response = response.json();
  //   setAllUsers(response);
  // });
  const data = [
    {
      title: "Van Gogh Museum",
      description: "Amsterdam",
      imageSrc: "https://picsum.photos/200/300",
    },
    {
      title: "Van Gogh Museum",
      description: "Amsterdam",
      imageSrc: "https://picsum.photos/200/300",
    },
    {
      title: "Van Gogh Museum",
      description: "Amsterdam",
      imageSrc: "https://picsum.photos/200/300",
    },
    {
      title: "Van Gogh Museum",
      description: "Amsterdam",
      imageSrc: "https://picsum.photos/200/300",
    },
    {
      title: "Van Gogh Museum",
      description: "Amsterdam",
      imageSrc: "https://picsum.photos/200/300",
    },
    {
      title: "Van Gogh Museum",
      description: "Amsterdam",
      imageSrc: "https://picsum.photos/200/300",
    },
    {
      title: "Van Gogh Museum",
      description: "Amsterdam",
      imageSrc: "https://picsum.photos/200/300",
    },
    {
      title: "Van Gogh Museum",
      description: "Amsterdam",
      imageSrc: "https://picsum.photos/200/300",
    },
  ];
  console.log(allUsers);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Admin page</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {data.map((item) => (
            <Card
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
