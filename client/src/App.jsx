// 
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// //import AaravSiya from "./pages/AaravSiya";
// import AaravSiya from "./pages/Home/AaravSiya";
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/testimonial/:id" element={<AaravSiya />} />
//     </Routes>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import AaravSiya from "./pages/Home/AaravSiya";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/testimonial/:id" element={<AaravSiya />} />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AaravSiya from "./pages/Home/AaravSiya";

import FeaturesPage from "./pages/FeaturesPage";
import GalleryPage from "./pages/GalleryPage";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import TestimonialsPage from "./pages/TestimonialsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/testimonial/:id" element={<AaravSiya />} />
    </Routes>
  );
}

export default App;