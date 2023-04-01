import YouTube from 'react-youtube';
import { useState } from 'react';

export default function YouTubePlayer() {
  const [playVideo, setPlayVideo] = useState(undefined);

  const opts = {
    height: '177',
    width: '175',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
    },
  };

  return (
    <YouTube
      videoId={'AmOgpoCKYoM'}
      opts={opts}
      onPlay={(e) => setPlayVideo(e)}
    />
  );
}
