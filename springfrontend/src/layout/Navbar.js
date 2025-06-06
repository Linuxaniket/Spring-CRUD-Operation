import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fw-bold">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>SpringProject</Link>
          <form className="d-flex" role="search">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
            <Link className="btn btn-outline-primary" to="/adduser" >AddStudent</Link>
          </form>
        </div>
      </nav>
    </div>
  );
}
