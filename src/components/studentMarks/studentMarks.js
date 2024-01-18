import "./studentMarks.css";
import StudentMarksGet from "./studentMarksGet";
import { Link } from "react-router-dom";

function studentMarks() {
  var one = true;
  var two = true;
  var three = true;
  return (
    <>
      <div className="thisPage">
        <div className="sidebar">
          <Link to="/studentMarksGet" className="sideItems">
            Get Marks
          </Link>
          <Link className="sideItems">Update Marks</Link>
          <Link className="sideItems">Insert Marks</Link>
        </div>
        <div>
          {one?(
            <StudentMarksGet/>
          ):(<></>)}
          {two?(
            <StudentMarksGet/>
          ):(<></>)}
          {three?(
            <StudentMarksGet/>
          ):(<></>)}
        </div>
      </div>
    </>
  );
}

export default studentMarks;
