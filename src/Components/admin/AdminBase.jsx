import React from "react";
import { Link } from "react-router-dom";

function AdminBase() {
  return (
    <div>
      <input type="checkbox" id="check" />
      {/* <!--header area start--> */}
      <header>
        <label htmlFor="check">
          <i
            style={{ left: "200px", top: "2vw", marginLeft: "1vh" }}
            className="fas fa-bars"
            id="sidebar_btn"
          ></i>
        </label>
        <div className="left_area">
          <h3>Exam Portal</h3>
        </div>
        <div className="right_area">
          <Link to="/" className="logout_btn">
            Logout
          </Link>
        </div>
      </header>
      {/* <!--header area end-->
        <!--sidebar start--> */}
      <div className="sidebar">
        <center>
          <img src="./Images/Admin.jpg" height="100px" weidth="100px" />
          <h4>Student</h4>
        </center>
        <Link to="/admin-dashboard">
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/test">
          <i className="fas fa-chalkboard-teacher"></i>
          <span>Test</span>
        </Link>
        <Link to="/admin-student">
          <i className="fas fa-user-graduate"></i>
          <span>College Prediction</span>
        </Link>
      </div>
      {/* <!--sidebar end--> */}
    </div>
  );
}

export default AdminBase;
