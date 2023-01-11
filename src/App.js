import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";

import { useAuthentication } from "./hooks/useAuthentication";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./extras/Login";
import Register from "./extras/Register";

import Início from "./pages/Início/Início";
import CreatePost from "./pages/CreatePost"
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user == undefined;

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    }, [auth])

  })

  if(loadingUser) {
    return <p>Carregando usuário...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={user}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Início />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts/create" element={<CreatePost/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
