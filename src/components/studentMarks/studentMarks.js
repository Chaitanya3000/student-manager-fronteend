import "./studentMarks.css";
import StudentMarksGet from "./studentMarksGet";
import StudentMarksPut from "./studentMarksPut";
import StudentMarksUpdate from "./studentMarksUpdate";
import { Link } from "react-router-dom";

function studentMarks() {
  var one = true;
  var two = true;
  var three = true;
  return (
    <>
      <div className="thisPage">
        <div className="sidebar">
          <Link className="sideItems">Get Marks</Link>
          <Link className="sideItems">Update Marks</Link>
          <Link className="sideItems">Insert Marks</Link>
        </div>
        <div>
          {one ? <StudentMarksGet /> : <></>}
          {two ? <StudentMarksUpdate /> : <></>}
          {three ? <StudentMarksPut /> : <></>}
        </div>
      </div>
    </>
  );
}

export default studentMarks;
