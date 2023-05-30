import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
