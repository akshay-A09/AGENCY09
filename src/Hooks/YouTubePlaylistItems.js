// YouTubePlaylistItems.js
import React, { useState, useEffect } from 'react';

const YouTubePlaylistItems = ({ playlistId, apiKey }) => {
  const [items, setItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylistItems = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=20&key=${apiKey}`
        );
        const data = await response.json();
        setItems(data.items);

        // Set the first video's ID as the default selected video if available
        if (data.items && data.items.length > 0) {
          const firstVideoId = data.items[0].snippet.resourceId.videoId;
          setSelectedVideo(firstVideoId);
        }
      } catch (error) {
        console.error('Error fetching playlist items:', error);
      }
      setLoading(false);
    };

    fetchPlaylistItems();
  }, [playlistId, apiKey]);

  if (loading) return <div>Loading playlist...</div>;

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
        <h4>Playlist Items</h4>
        <div className="playlist-items">
          {items.map((item) => {
            const videoId = item.snippet.resourceId.videoId;
            const title = item.snippet.title;
            const thumbnail = item.snippet.thumbnails.medium.url;

            return (
              <div
                key={item.id}
                className={`playlist-item ${selectedVideo === videoId ? 'active' : ''}`}
                style={{ cursor: 'pointer', width: '100%' }}
                onClick={() => setSelectedVideo(videoId)}
              >
                <img src={thumbnail} alt={title} />
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YouTubePlaylistItems;
