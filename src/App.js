import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route />
    </Routes>
  );
}

export default App;
