import React from "react";
import Card from "../components/Card";

export default function YourMatches() {
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
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Your Matches page
        </h2>
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
