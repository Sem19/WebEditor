import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login.jsx";
import PrivateRoute from "./components/private-route/private-route.jsx";
import { ToastContainer } from "react-toastify";
import "./reset.css";
import HomePage from "./pages/home/home.jsx";
import Header from "./components/header/header.jsx";

const App = () => {
  return (
    <Router>
      <ToastContainer autoClose={4000} />
      <Header />
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
