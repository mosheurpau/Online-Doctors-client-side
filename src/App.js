import "./App.css";
import Navebar from "./Pages/Shared/Navebar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-1">
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
