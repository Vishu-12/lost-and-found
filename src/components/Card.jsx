import PropTypes from "prop-types";
import { apiEndPoint, baseURL } from "../constants";

export default function Card({ lostItem, foundItem, id }) {
  async function handleApproved(e) {
    e.preventDefault();

    const response = await fetch(`${baseURL}${apiEndPoint.approved}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matchId: id,
        approved: true,
      }),
    });

    await response.json();

    window.location.reload();
  }

  async function handleRejected(e) {
    e.preventDefault();
    const response = await fetch(`${baseURL}${apiEndPoint.approved}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matchId: id,
        approved: false,
      }),
    });

    await response.json();

    window.location.reload();
  }
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md ">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2 text-center">
          Lost Item Details
        </h2>
        <img
          src={lostItem.image}
          className="w-full h-100 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-bold mb-2">{lostItem.name}</h2>
        <p className="text-gray-700">{lostItem.description}</p>
        <hr className="my-4 border-t border-gray-200" />
        <h2 className="text-lg font-bold mb-2 text-center">
          Found Item Details
        </h2>
        <img
          src={foundItem.image}
          className="w-full h-100 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-bold mb-2">{foundItem.name}</h2>
        <p className="text-gray-700">{foundItem.description}</p>
      </div>
      <div className="flex justify-center items-center p-4">
        <button
          className="p-2 border mr-4 bg-green-500 text-white rounded-full w-24"
          onClick={handleApproved}
        >
          Approve
        </button>
        <button
          className="p-2 border bg-red-500 text-white rounded-full w-24"
          onClick={handleRejected}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  lostItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  foundItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
