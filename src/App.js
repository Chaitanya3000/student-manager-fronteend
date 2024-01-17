import { Link, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Login from "./components/login/login";
import Search from "./components/Search/search";
import "./App.css";

function App() {
  return (
    <>
      <div className="nav">
        <h1>STUDENT MANAGER</h1>
        <Link to="/login" className="link">
          <div className="btn">Login</div>
        </Link>
      </div>
      <Routes>
        <Route exact path="" element={<Main />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/search" element={<Search/>}></Route>
      </Routes>
    </>
  );
}

export default App;
