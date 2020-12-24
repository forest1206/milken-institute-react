import React from "react";
import { Link } from "react-router-dom";

export default function SessionTime({ data }) {
  return (
    <li>
      <div class="session_time">
        <p>
          <span>{data.time}</span>
        </p>
      </div>
      <div class="session_title">
        <p>
          <Link class="watch_video" to={`${data.url}`}>
            {data.title}
          </Link>
        </p>
      </div>
      <div class="session_links">
        <Link class="watch_video" to={`${data.url}`}>
          <i class="far fa-play-circle"></i>
        </Link>
      </div>
    </li>
  );
}
