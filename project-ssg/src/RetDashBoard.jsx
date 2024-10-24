import React from 'react';
import './RetDashBoard.css'; // Import the CSS file if you want to separate styles

const RetDashBoard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Stock Bridge</h2>
        <a href="#">Dashboard</a>
        <a href="#">Inventory</a>
        <a href="#">Reports</a>
        <a href="#">Suppliers</a>
        <a href="#">Orders</a>
        <a href="#">Leaderboard</a>
        <a href="#">Settings</a>
      </div>
      <div className="main">
        <div className="header">
          <input
            type="text"
            placeholder="Search suppliers, orders, product..."
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '300px'
            }}
          />
          <div>User Icon</div>
        </div>
        <div className="cards">
          <div className="card">
            <h4>Sales Overview</h4>
            <p>Revenue: ₹ 18,300</p>
            <p>Profit: ₹ 868</p>
          </div>
          <div className="card">
            <h4>Inventory Summary</h4>
            <p>Quantity in Hand: 868</p>
            <p>To be received: 200</p>
          </div>
          <div className="card">
            <h4>Purchase Overview</h4>
            <p>Purchase: 82</p>
            <p>Cost: ₹ 13,573</p>
          </div>
          <div className="card">
            <h4>Product Summary</h4>
            <p>Number of Suppliers: 31</p>
            <p>Number of Categories: 21</p>
          </div>
        </div>
        <div className="chart">
          <h4>Sales Report</h4>
          {/* You can add a chart here using a library like Chart.js */}
        </div>
      </div>
    </div>
  );
};

export default RetDashBoard;
