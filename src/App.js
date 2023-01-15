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
import CreatePost from "./pages/CreatePost/CreatePost"
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";
import Post from "./pages/Post/Post";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }


  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Início />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to='/'/>} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to='/'/>} />
            <Route path="/posts/create" element={user ? <CreatePost/> : <Navigate to='/'/>} />
            <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to='/'/>} />
            <Route path="/dashboard/search" element={user ? <Search/> : <Navigate to='/'/>} />
            <Route path="/post/:id" element={user ? <Post/> : <Navigate to='/'/>} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
