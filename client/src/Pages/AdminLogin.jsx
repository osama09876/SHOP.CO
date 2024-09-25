import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after login
import Alert from "@/components/Alert"; // Assuming you have an alert component

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch credentials from environment variables for demo purposes
    const storedEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const storedPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (email === storedEmail && password === storedPassword) {
      setShowAlert(true);
      setTimeout(() => {
        navigate("/admin/dashboard"); // Redirect to Admin Dashboard
      }, 3000); // Delay navigation for 3 seconds to allow alert display
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Admin Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        {showAlert && (
          <Alert
            message={"Login Successful! Redirecting..."}
            bgColor={"bg-green-500"}
            progressColor={"bg-green-600"}
            onClose={() => setShowAlert(false)}
          />
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Admin Email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Admin Password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
          >
            Login
          </button>
        </form>

        {/* Optional Footer */}
        <div className="text-center text-gray-400 mt-6">
          <p>Forgot your password? Contact your administrator.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
