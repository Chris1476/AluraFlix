import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditVideo() {
  const [video, setVideo] = useState({
    title: "",
    category: "",
    image: "",
    url: "",
    description: "",
  });

  const navigate = useNavigate();

  // Cargar el video a editar desde el LocalStorage
  useEffect(() => {
    const videoToEdit = JSON.parse(localStorage.getItem("editVideo"));
    if (videoToEdit) {
      setVideo(videoToEdit);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo({ ...video, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const videos = JSON.parse(localStorage.getItem("videos")) || [];
    const index = videos.findIndex((v) => v.title === video.title); // Aquí puedes encontrar un video por su título u otro criterio único
    videos[index] = video; // Reemplazar el video editado
    localStorage.setItem("videos", JSON.stringify(videos));
    navigate("/"); // Redirigir a la lista de videos
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
      <h2>Editar Video</h2>
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
            maxLength="15"
          />
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
            maxLength="30"
          />
        </div>
        <button type="submit" className="btn btn-black">
          Guardar Cambios
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

export default EditVideo;