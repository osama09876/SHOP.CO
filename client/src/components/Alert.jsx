import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Alert = ({ message, onClose, bgColor,progressColor, duration = 5000 }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (onClose) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.max(0, prev - 100 / (duration / 100)));
      }, 100);

      const timeout = setTimeout(() => {
        onClose(false);
      }, duration);

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [onClose, duration]);

  return (
    onClose && (
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <div
          className={`${bgColor} text-white px-4 py-3 rounded-md shadow-lg flex justify-between items-center animate-fadeIn`}
        >
          <span>{message}</span>
          <button
            onClick={onClose}
            className="ml-4 text-sm font-semibold hover:text-red-300"
          >
            Close
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-red-200 rounded-b-md overflow-hidden">
          <div
            className={`${progressColor} h-1 transition-all duration-100`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    )
  );
};

export default Alert;
