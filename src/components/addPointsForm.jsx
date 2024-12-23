import React, { useState } from 'react';

const AddPointsForm = () => {
  const [username, setUsername] = useState('');
  const [points, setPoints] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call or form submission logic
    setSuccessMessage(true);

    // Reset form after submission (optional)
    setTimeout(() => {
      setSuccessMessage(false);
      setUsername('');
      setPoints('');
    }, 3000); // Success message disappears after 3 seconds
  };

  const handleCancel = () => {
    setUsername('');
    setPoints('');
    setSuccessMessage(false);
  };

  return (
    <div className="max-w-xl md:mx-10 text-midnightblue mx-auto w-full bg-white p-6 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-xl font-semibold flex items-center">
        Add Points to User Profile{' '}
        {successMessage && (
          <span className="ml-4 text-green-500 text-sm font-medium">
            ✓ Successfully Updated
          </span>
        )}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Field */}
        <div className="flex flex-col space-y-1">
          <label className="font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Points Field */}
        <div className="flex flex-col space-y-1">
          <label className=" font-medium">Points Details</label>
          <input
            type="number"
            placeholder="Enter points"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-1 text-black border-black border rounded-md hover:bg-gray-200"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-1 text-black border-black border rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPointsForm;
