import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Genre from "./pages/Genre";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import { useAuth } from "./providers/authProvider";

function App() {
  const { user } = useAuth();
  console.log(user);

  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<HomePage />} /> */}
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />

        <Route
          exact
          path="/"
          element={user ? <HomePage /> : <Navigate to="/register" />}
        />

        <Route path="/genre" element={<Genre />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
