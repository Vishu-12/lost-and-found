import PropTypes from "prop-types";

export default function YourMatchCard({ allUserMatches }) {
  console.log("jdfjdnfjdn", allUserMatches);
  return (
    <>
      {allUserMatches?.lostItems?.map((match) => (
        <div
          key={match.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={match.image}
            alt="Design Image"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Design Title</h2>
            <p className="text-gray-700 mb-4">Design Description</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #DesignType
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

YourMatchCard.propTypes = {
  allUserMatches: PropTypes.shape({
    lostItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        image: PropTypes.string.isRequired,
        // Add other properties of 'match' if needed
      })
    ),
  }),
};
