import React from "react";

const TopBar: React.FC = () => {
  return (
    <div className="w-full h-12 bg-[#1a1a1a] border-b border-gray-700 flex items-center justify-between px-4 text-gray-300">
      {/* Left - Comment Icon */}
      <div className="flex items-center gap-3">
        <button className="w-7 h-7 rounded-full border border-gray-500 flex items-center justify-center">
          <span role="img" aria-label="comment">
            💬
          </span>
        </button>
        <span className="text-sm">Untitled</span>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-sm hover:text-white">Enter Fullscreen</button>
        <button className="text-sm hover:text-white">Restart</button>

        {/* Login Buttons */}
        <button className="px-3 py-1 border border-gray-500 rounded-md text-sm hover:bg-gray-700">
          Login
        </button>

        <button className="px-3 py-1 bg-white text-black rounded-md text-sm">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default TopBar;
