import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-teal-700 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 pl-16">
          <h1 className="text-4xl font-bold mb-4">
            Trusted by 400,000+ people to reunite with their lost treasures!
          </h1>
          <p className="text-xl mb-6">
            Lost O Found reunites people with Lost & Found property
          </p>
          <Link className="bg-yellow-400 text-teal-700 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300">
            I&apos;ve found something!
          </Link>
        </div>
        <div className="ml-auto">
          <img
            src="https://fusionbytelabs.tech/lnf_header"
            alt="Header Img"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
