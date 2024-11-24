import React from "react";

export default function Awards() {
  const awards = [
    { name: "RTLZ", logo: "/placeholder.svg?height=100&width=100" },
    {
      name: "Accenture Innovation Awards",
      logo: "/placeholder.svg?height=100&width=100",
    },
    { name: "Loey Awards", logo: "/placeholder.svg?height=100&width=100" },
    {
      name: "The Next Women Business Magazine",
      logo: "/placeholder.svg?height=100&width=100",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">iLost Awards</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {awards.map((award, index) => (
            <div key={index} className="text-center">
              <image
                src={award.logo}
                alt={award.name}
                width={100}
                height={100}
                className="mb-2"
              />
              <p className="text-sm">{award.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
