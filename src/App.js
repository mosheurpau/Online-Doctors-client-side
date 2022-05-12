import "./App.css";
import Navebar from "./Pages/Shared/Navebar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
