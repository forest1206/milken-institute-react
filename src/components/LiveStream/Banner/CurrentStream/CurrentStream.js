import PropTypes from 'prop-types';
import React from 'react';

var featuredVidUrl = 'https://player.vimeo.com/video/468169675?autoplay=0';

export default function CurrentStream({ videoUrl }) {
    return (
        <div className="container video_container">
            <h2>Current Livestream</h2>
            <iframe
                title="featured"
                src={`${videoUrl ? videoUrl : featuredVidUrl}`}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen></iframe>
        </div>
    );
}

CurrentStream.propTypes = {
    videoUrl: PropTypes.string
};
