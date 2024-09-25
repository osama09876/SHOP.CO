import Alert from "@/components/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyAdmin = () => {
  const [secretKey, setSecretKey] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch the secret key from Vite environment variables
    const storedSecretKey = import.meta.env.VITE_ADMIN_SECRET;
    console.log(storedSecretKey);

    if (secretKey === storedSecretKey) {
      // Success: Redirect to Admin Dashboard (You can navigate or change state)
      setShowAlert(true);
      setTimeout(() => {
        navigate("/admin/admin-login"); // Redirect to Admin Dashboard
      }, 3000);
    } else {
      // Error: Incorrect Secret Key
      setError("Incorrect Secret Key");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Secret Key Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="secretKey"
            >
              Enter Secret Key
            </label>
            <input
              type="password"
              id="secretKey"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Secret Key"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
      {showAlert && (
        <Alert
          message={"Verify successfully"}
          bgColor={"bg-green-400"}
          progressColor={"bg-green-600"}
          onClose={() => setShowAlert(false)} // Close alert after duration or on click
        />
      )}
    </div>
  );
};

export default VerifyAdmin;
