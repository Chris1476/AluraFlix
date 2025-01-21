import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

function VideoList() {
  const [videos, setVideos] = useState([]);

  // Cargo los videos desde el LocalStorage
  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(storedVideos);
  }, []);

  const handleDelete = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    localStorage.setItem("videos", JSON.stringify(updatedVideos));
    setVideos(updatedVideos);
  };

  const handleEdit = (index) => {
    const videoToEdit = videos[index];
    localStorage.setItem("editVideo", JSON.stringify(videoToEdit));
  };

  return (
    <div className="container">
      {/* <h2>Lista de Videos</h2> */}
      <div className="row">
        {videos.map((video, index) => (
          <div key={index} className="col-md-4 mb-4 mt-4">
            <div className="card">
              <VideoCard video={video} />
              <div className="card-body">
                <div className="d-flex justify-content-center gap-2">
                    <Link to="/edit-video">
                    <button
                        className="btn btn-black mt-0"
                        onClick={() => handleEdit(index)}
                    >
                        Modificar
                    </button>
                    </Link>
                    <button
                    className="btn btn-black mt-0"
                    onClick={() => handleDelete(index)}
                    >
                    Eliminar
                    </button>
                </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
