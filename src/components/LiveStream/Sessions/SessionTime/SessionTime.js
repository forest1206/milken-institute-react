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
          <a class="watch_video" href={`${data.url}`}>
            {data.title}
          </a>
        </p>
      </div>
      <div class="session_links">
        <a class="watch_video" href={`${data.url}`}>
          <i class="far fa-play-circle"></i>
        </a>
      </div>
    </li>
  );
}
