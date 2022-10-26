import logo from "./logo.svg";
import "./App.css";
import { Signup } from "./Pages/Login/Signup";
import { Login } from "./Pages/Login/Login";
import { HomeCard } from "./Component/HomeCard/HomeCard";
import { Home } from "./Pages/Home/Home";
import { Category } from "./Pages/Category/Category";
import { Detail } from "./Pages/Detail/Detail";
import { Footer } from "./Component/Footer/Footer";
import { Header } from "./Component/Header/Header";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./Auth/AuthProvider";
import { setToken } from "./config/axios";
import { About } from "./Pages/About/About";
import { Search } from "./Pages/SearchResult/Search";
import { ResetPassword } from "./Pages/ResetPassword/ResetPassword";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WithHeader } from "./config/withHeader";

function App() {
  const ctx = useAuth();
  setToken(ctx?.loginUser?.token);
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/reset/:token" element={<ResetPassword />} />

        <Route element={<WithHeader />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/:name" element={<Category />} />
          <Route path="/:name/:id" element={<Detail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search/:name" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
