import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Genre from "./pages/Genre";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/register" element={<Register />} />

        <Route path="/genre" element={<Genre />} />
      </Routes>
    </Router>
  );
}

export default App;
