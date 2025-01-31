import React, { useEffect, useState } from "react";
import axios from "axios";

function Student() {
  const [customerId, setCustomerId] = useState("");
  const [studentname, setStudentName] = useState("");
  const [studentddress, setStudentAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    // const result = await axios.get("http://localhost:8020/api/customer");
  }

  return (
    <div>
      <h1>Student Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label className="">Student Name</label>
            <input
              type="text"
              className="form-control"
              id=""
              value={studentname}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label>Student Address</label>
            <input
              type="text"
              className="form-control"
              id=""
              value={studentddress}
              onChange={(e) => setStudentAddress(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label>Mobile Number</label>
            <input
              type="text"
              className="form-control"
              id=""
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center gap-4 mt-5">
            <button className="btn btn-primary">Register</button>
            <button className="btn btn-warning ">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Student;
