import React, { useEffect, useState } from "react";
import axios from "axios";

function Student() {
  const [studentId, setStudentId] = useState("");
  const [students, setStudents] = useState([]);
  const [studentname, setStudentName] = useState("");
  const [studentddress, setStudentAddress] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await axios.get(
      "http://localhost:8020/api/v1/student/getAll"
    );
    setStudents(result.data);
    console.log(result.data);
  }

  async function save(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8019/api/v1/student/save", {
        studentname: studentname,
        studentddress: studentddress,
        mobile: mobile,
      });
      alert("Student registration successful...");
      setStudentId("");
      setStudentName("");
      setStudentAddress("");
      setMobile("");
    } catch (err) {
      alert("Student registration failed...");
    }
  }

  async function editStudent(student) {
    setStudentName(student.studentname);
    setStudentAddress(student.studentddress);
    setMobile(student.mobile);
    setStudentId(student._id);
  }

  async function update(e) {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:8020/api/v1/student/edit/" + studentId,
        {
          studentname: studentname,
          studentddress: studentddress,
          mobile: mobile,
        }
      );
      alert("Student update successful...");
      setStudentId("");
      setStudentName("");
      setStudentAddress("");
      setMobile("");
      load();
    } catch (err) {
      alert("Student updation failed...");
    }
  }

  async function deleteStudent() {}

  return (
    <div>
      <h1 className="my-5 text-center fw-bold">Student Details</h1>
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
            <button className="btn btn-primary" onClick={save}>
              Register
            </button>
            <button className="btn btn-warning " onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>

      <table className="table table-bordered mt-5 table-dark table-striped">
        <thead>
          <tr>
            <th className="col">Student Name</th>
            <th className="col">Student Address</th>
            <th className="col">Student Mobile</th>
            <th className="col">Actions</th>
          </tr>
        </thead>
        {students.map((student) => {
          return (
            <tbody>
              <tr>
                <td>{student.studentname}</td>
                <td>{student.studentaddress}</td>
                <td>{student.mobile}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => editStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteStudent(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Student;
