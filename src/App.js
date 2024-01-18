import { Link, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Login from "./components/login/login";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import StudentDetails from "./components/studentDetails/studentDetails";
import StudentMarks from "./components/studentMarks/studentMarks";
import "./App.css";

function App() {
  let bool = true;
  return (
    <>
      <div className="nav">
        <h1>STUDENT MANAGER</h1>
        <nav className="navele">
          {bool ? (
            <>
              <Link to="/home" className="link">
                Home
              </Link>
              <Link to="/details" className="link">
                Student Details
              </Link>
                <Link to="/marks" className="link">
                  Student Marks
                </Link>
              <Link to="/about" className="link">
                About
              </Link>
              <Link to="/contact" className="link">
                contact
              </Link>
              <Link to="" className="link">
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login" className="link">
              Login
            </Link>
          )}
        </nav>
      </div>
      <Routes>
        <Route exact path="" element={<Main />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/details" element={<StudentDetails />}></Route>
        <Route exact path="/marks" element={<StudentMarks />}></Route>
      </Routes>
    </>
  );
}

export default App;
