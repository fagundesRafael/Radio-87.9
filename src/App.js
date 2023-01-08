import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Início from "./pages/Início/Início";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Início />} />
          <Route path="/" element={<Início />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
