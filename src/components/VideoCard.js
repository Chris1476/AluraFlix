import React from "react";

const extractYouTubeId = (url) => {
  const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[1] ? match[1] : null;
};

const VideoCard = ({ video, onDelete, onEdit }) => {
  return (
    <div className="video-card">
      <img src={video.image} alt={video.title} className="card-img-top fixed-size" />
      <div className="card-body">
        <h5 className="card-title">{video.title}</h5>
        <p className="card-text">{video.description}</p>
        <p className="card-text"><strong>Categoría:</strong> {video.category}</p>

        {/* Acordeón para mostrar el video y los botones */}
        <div className="accordion" id={`accordion-${video.id}`}> 
          <div className="accordion-item">
            <h2 className="accordion-header" id={`heading-${video.id}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${video.id}`}
                aria-expanded="false"
                aria-controls={`collapse-${video.id}`}
              >
                Ver Video
              </button>
            </h2>
            <div
              id={`collapse-${video.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${video.id}`}
              data-bs-parent={`#accordion-${video.id}`}
            >
              <div className="accordion-body">
                {/* Video */}
                <div className="ratio ratio-16x9 mb-3">
                <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(video.url)}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

