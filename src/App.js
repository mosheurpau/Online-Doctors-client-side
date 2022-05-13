import "./App.css";
import Navebar from "./Pages/Shared/Navebar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-1">
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
