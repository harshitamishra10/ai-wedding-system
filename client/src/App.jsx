// import { Feature } from "framer-motion";
// import Home from "./pages/Home/Home";

// function App() {
//   return <Home />;
//   return <Feature />;
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeatureDetail from "./components/sections/FeatureDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features/:slug" element={<FeatureDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;