import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import { selectcapsule } from "./features/capsuleSlice";
import { useSelector } from "react-redux";
import SinglePage from "./components/SinglePage";

function App() {
  const capsule=useSelector(selectcapsule);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/grid" element={<Grid />} />
        { <Route path={"/"+capsule.capsule_serial}  element={<SinglePage />} />}
        
      </Routes>
    </div>
  );
}

export default App;
