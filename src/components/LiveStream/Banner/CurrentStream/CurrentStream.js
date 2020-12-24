import PropTypes from "prop-types";
import React from "react";

var featuredVidUrl = "https://player.vimeo.com/video/468169675?autoplay=0";

export default function CurrentStream({ videoUrl }) {
  return (
    <div class="container video_container">
      <h2>Current Livestream</h2>
      <iframe
        title="featured"
        src={`${videoUrl ? videoUrl : featuredVidUrl}`}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  );
}

CurrentStream.propTypes = {
  videoUrl: PropTypes.string,
};
