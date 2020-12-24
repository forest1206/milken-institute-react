import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import './back_top.scss';

export default function BackToTop() {
    const handleClick = () => {
        scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };
    return (
        <div className="back-top-anchor">
            <FaChevronUp onClick={handleClick} />
        </div>
    );
}
