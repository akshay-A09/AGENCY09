import React, { useState } from 'react';

const CustomVideoPlaylist = ({ videoData, playlistTitle = "Playlist Items" }) => {
  // Hooks must be at the top
  const [selectedVideo, setSelectedVideo] = useState(videoData?.[0]?.id || null);

  // Early return after hooks
  if (!videoData || videoData.length === 0) return null;

  return (
    <div className="youtube-playlist">
      {selectedVideo && (
        <div className="video-player">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Selected Video"
          ></iframe>
        </div>
      )}

      <div className="video-player-list">
        <h4>{playlistTitle}</h4>
        <div className="playlist-items">
          {videoData.map((video) => (
            <div
              key={video.id}
              className={`playlist-item ${selectedVideo === video.id ? 'active' : ''}`}
              style={{ cursor: 'pointer', width: '100%' }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <img 
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                alt={video.title} 
              />
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlaylist;