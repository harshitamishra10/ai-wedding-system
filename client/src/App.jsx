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

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AaravSiya from "./pages/Home/AaravSiya";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testimonial/:id" element={<AaravSiya />} />
    </Routes>
  );
}

export default App;