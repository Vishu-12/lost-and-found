import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-teal-700 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            Lost. <span className="text-yellow-400">&</span> Found
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/admin">Admin</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/your-matches">Your Matches</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
