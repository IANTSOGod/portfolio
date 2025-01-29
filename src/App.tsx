import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/portfolio/" element={<Home></Home>}></Route>
      <Route path="/portfolio/about" element={<About></About>}></Route>
    </Routes>
  );
}
