import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import VideoList from "./components/VideoList";
import VideoForm from "./components/VideoForm";
import EditVideo from "./components/EditVideo";  // Asegúrate de importar el componente
import Navbar from "./components/NavBar";
import './styles.css';
import './navbar.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<VideoList />} />
          <Route path="/add-video" element={<VideoForm />} />
          <Route path="/edit-video" element={<EditVideo />} /> {/* Agregar ruta de editar */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;