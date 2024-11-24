import React from "react";

export default function Organizations() {
  const organizations = [
    {
      name: "Van Gogh Museum",
      location: "Amsterdam",
      logo: "/placeholder.svg?height=100&width=100",
    },
    { name: "Efteling", logo: "/placeholder.svg?height=100&width=100" },
    {
      name: "Dolfinarium",
      description: "beleef de magie van dolfijnen",
      logo: "/placeholder.svg?height=100&width=100",
    },
    { name: "MEININGER HOTELS", logo: "/placeholder.svg?height=100&width=100" },
    {
      name: "Hilversum Mediastad",
      logo: "/placeholder.svg?height=100&width=100",
    },
  ];
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Some organizations that use the Lost & Found software of iLost are...
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {organizations.map((org, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <image
                src={org.logo}
                alt={org.name}
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="font-bold">{org.name}</h3>
              {org.location && (
                <p className="text-sm text-gray-600">{org.location}</p>
              )}
              {org.description && (
                <p className="text-sm text-gray-600">{org.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
