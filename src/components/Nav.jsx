import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="bg-teal-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-bold pl-4">
            Lost <span className="text-yellow-500">O</span> Found
          </span>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-white px-4 py-2 rounded-full font-bold hover:bg-transparent transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/admin"
            className="text-white px-4 py-2 rounded-full font-bold hover:bg-transparent transition duration-300"
          >
            Admin Console
          </Link>
          {localStorage.getItem("userId") && (
            <>
              <Link
                to="/your-matches"
                className="text-white px-4 py-2 rounded-full font-bold hover:bg-transparent transition duration-300"
              >
                Your Matches
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("userId");
                  window.location.reload();
                  window.location.href = "/";
                }}
                className="text-white px-4 py-2 rounded-full font-bold hover:bg-transparent transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
