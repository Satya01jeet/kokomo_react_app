import React,{ useState } from 'react'

const UpdateUserDetailsForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSuccessMessage(true);
  
      setTimeout(() => {
        setSuccessMessage(false);
        setUsername('');
        setEmail('');
        setPhone('');
      }, 3000);
    };
  
    const handleCancel = () => {
      setUsername('');
      setEmail('');
      setPhone('');
      setSuccessMessage(false);
    };
  
    return (
      <div className="max-w-xl md:mx-10 text-black mx-auto bg-white p-6 rounded-2xl shadow-md space-y-6">
        <h2 className="text-xl font-semibold flex items-center">
          Update User Details{' '}
          {successMessage && (
            <span className="ml-4 text-green-500 text-sm font-medium">
              ✓ Successfully Updated
            </span>
          )}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
  
          <div className="flex flex-col space-y-1">
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
  
          <div className="flex flex-col space-y-1">
            <label className="font-medium">Phone</label>
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
  
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
  

export default UpdateUserDetailsForm