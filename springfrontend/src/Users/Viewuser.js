import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewuser() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/readData/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error("User fetch failed:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">Details of user id : {user.id}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>User Id:</b> {user.id}
              </li>
              <li className="list-group-item">
                <b>Name:</b> {user.name}
              </li>
              <li className="list-group-item">
                <b>Address:</b> {user.address}
              </li>
              <li className="list-group-item">
                <b>Email:</b> {user.email}
              </li>
            </ul>
          </div>
        </div>
        <Link className="btn btn-primary my-2" to={"/"}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
