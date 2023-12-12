import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import Favorites from "./views/Favorites.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
