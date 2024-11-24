import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import YourMatches from "./pages/YourMatches";
import Admin from "./pages/Admin";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/your-matches" element={<YourMatches />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
