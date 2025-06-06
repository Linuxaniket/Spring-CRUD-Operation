import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function Edituser() {
  let navigate = useNavigate();
  // useNavigate is used to programmatically navigate to different routes

  const { id } = useParams();

  const [user, setUsers] = useState({
    name: "",
    address: "",
    email: "",
  });

  const { name, address, email } = user;
  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchUser();
    // Fetch user data when the component mounts
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the user data to your backend API
    // For example:
    await axios.put(`http://localhost:8080/updateData/${id}`, user);
    navigate("/"); // Redirect to home page after submission
    console.log("User submitted:", user);
    // Reset form after submission
    setUsers({ name: "", address: "", email: "" });
  };

  const fetchUser = async () => {
    const response = await axios.get(`http://localhost:8080/readData/${id}`);
    setUsers(response.data); // update the users state
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
