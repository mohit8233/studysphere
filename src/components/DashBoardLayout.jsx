import React from "react";

const DashBoardLayout = ({ children }) => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

       

        <ul>
          <li className="mb-2">Home</li>
          <li className="mb-2">Profile</li>
          <li className="mb-2">Settings</li>
        </ul>
      </div>

     
      <div className="flex-1 p-6 bg-gray-100">

        {children}

      </div>

    </div>
  );
};

export default DashBoardLayout;