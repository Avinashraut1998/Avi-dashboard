import React from "react";

const Dashboard = ({ setUser }) => {
  function handleClick() {
    setUser(null);
  }
  return (
    <div>
      Dashboard
      <button onClick={handleClick}>logout</button>
    </div>
  );
};

export default Dashboard;
