import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Feature } from "framer-motion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/ Feature" element={<Feature />} />
    </Routes>
  );
}

export default App;