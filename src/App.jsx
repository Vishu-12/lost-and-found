import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourMatches from "./pages/YourMatches";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/your-matches" element={<YourMatches />} />
      </Routes>
    </>
  );
}

export default App;
