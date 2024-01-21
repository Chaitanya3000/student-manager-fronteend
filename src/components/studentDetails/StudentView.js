import React from "react";

function StudentView() {
  return (
    <div className="details">
      <h1 className="heading">Student Details</h1>
      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            id="autoSizingInput"
            placeholder="Roll No"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Get
          </button>
        </div>
        <br />
      </form>
      <table className="table table-success table-striped" id="table">
        <tbody>
          <tr>
            <th scope="row">Student Name</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">Roll No</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>Larry the Bird</td>
          </tr>
          <tr>
            <th scope="row">Date of Birth</th>
            <td>Larry the Bird</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td>Larry the Bird</td>
          </tr>
          <tr>
            <th scope="row">Course</th>
            <td>Larry the Bird</td>
          </tr>
          <tr>
            <th scope="row">Branch</th>
            <td>Larry the Bird</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentView;
