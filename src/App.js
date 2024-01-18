import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Genre from "./pages/Genre";
import HomePage from "./pages/HomePage";

function App() {
  const user = localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <HomePage /> : <Register />} />

        <Route path="/register" element={<Register />} />

        <Route path="/genre" element={user ? <Genre /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
