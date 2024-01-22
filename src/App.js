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
  const genres = localStorage.getItem("genre");

  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />

        <Route
          path="/genre"
          element={user ? <Genre /> : <Navigate to="/register" />}
        />

        <Route
          exact
          path="/"
          element={user ? <HomePage /> : <Navigate to="/register" />}
        />

        <Route
          path="/movies"
          element={
            user ? (
              <Movies />
            ) : genres ? (
              <Movies />
            ) : (
              <Navigate to="/register" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
