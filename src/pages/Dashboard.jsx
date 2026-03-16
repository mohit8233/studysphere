import React from "react";

const Dashboard = () => {

  const user = localStorage.getItem("user");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold mb-4">
        Welcome to Dashboard
      </h1>

      <p>Email: {user?.email}</p>

    </div>
  );
};

export default Dashboard;