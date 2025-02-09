import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VideoForm() {
  const [video, setVideo] = useState({
    title: "",
    category: "",
    image: "",
    url: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo({ ...video, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Obtengo los videos del LocalStorage (si existen) o crear un array vacío
    const videos = JSON.parse(localStorage.getItem("videos")) || [];
    // Agrego el nuevo video al array
    videos.push(video);
    // Guardo el array actualizado en el LocalStorage
    localStorage.setItem("videos", JSON.stringify(videos));
    // Vuelvo a la página de inicio
    navigate("/");
  };

  const handleReset = () => {
    setVideo({
      title: "",
      category: "",
      image: "",
      url: "",
      description: "",
    });
  };

  return (
    <div className="container">
      <h2>Agregar Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            name="title"
            value={video.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <input
            type="text"
            name="category"
            value={video.category}
            onChange={handleChange}
            className="form-control"
            maxLength="15"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input
            type="text"
            name="image"
            value={video.image}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">URL del Video</label>
          <input
            type="text"
            name="url"
            value={video.url}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            name="description"
            value={video.description}
            onChange={handleChange}
            className="form-control"
            maxLength="30"
          />
        </div>
        <button type="submit" className="btn btn-black">
          Guardar Video
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="btn btn-black ms-2"
        >
          Limpiar
        </button>
      </form>
    </div>
  );
}

export default VideoForm;
