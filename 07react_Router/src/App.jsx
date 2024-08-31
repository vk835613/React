import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import User from "./pages/User.jsx";
import Github from "./pages/Github.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="User/:UersId" element={<User />} />
        {/* <Route loader={gethubInfoLoder} path="Github" element={<Github />} /> */}
        <Route path="Github" element={<Github />} />
      </Routes>
    </>
  );
}

export default App;
