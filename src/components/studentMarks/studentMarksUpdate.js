import React, { useState } from "react";
import "./studentMarks.css";

function StudentMarksPut() {
  const [branch, setBranch] = useState("CSE");
  const [semester, setSemester] = useState("1");
  const [subjects, setSubjects] = useState([]);
  const [setTableData] = useState([]);

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating data fetching based on the selected branch and semester.
    // Replace this with actual data fetching logic from your backend.

    // For now, let's assume you have subjects data for each branch and semester.
    const subjectsData = {
      CSE: {
        1: ["Math", "Physics", "Chemistry"],
        2: ["Data Structures", "Algorithms", "Database"],
        // Add more semesters as needed
      },
      ECE: {
        1: ["Signals and Systems", "Electronics", "Digital Circuits"],
        2: ["Communication Systems", "Control Systems", "VLSI"],
        // Add more semesters as needed
      },
      // Add more branches as needed
    };

    // Fetch subjects based on the selected branch and semester
    const fetchedSubjects = subjectsData[branch][semester] || [];

    // Set subjects and reset tableData
    setSubjects(fetchedSubjects);
    setTableData([]);
  };
  return (
    <>
      <div className="marks">
        <h1 className="heading">Update Student Marks</h1>
        <form
          className="row gy-2 gx-3 align-items-center"
          onSubmit={handleSubmit}
        >
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Roll No"
            />
          </div>
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="branchSelect">
              Branch
            </label>
            <select
              className="form-select"
              id="branchSelect"
              value={branch}
              onChange={handleBranchChange}
            >
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              {/* Add more branches as needed */}
            </select>
          </div>
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="semesterSelect">
              Semester
            </label>
            <select
              className="form-select"
              id="semesterSelect"
              value={semester}
              onChange={handleSemesterChange}
            >
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              {/* Add more semesters as needed */}
            </select>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Get
            </button>
          </div>
        </form>

        <form className="row gy-2 gx-3 align-items-center">
          {subjects.map((subject) => (
            <div className="col-4">
              <div key={subject}>
                <label className="form-label text-white">{subject}</label>
                <input
                  type="text"
                  className="form-control"
                  id="autoSizingInput"
                  placeholder={subject}
                />
              </div>
            </div>
          ))}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentMarksPut;
