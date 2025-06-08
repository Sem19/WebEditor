import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import HomePage from "./pages/home.jsx";
import PrivateRoute from "./components/private-route/private-route.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <ToastContainer autoClose={4000} />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<HomePage />} />
        </Route>
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
