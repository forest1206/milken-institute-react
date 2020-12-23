import React from "react";
import { Link } from "react-router-dom";

export default function CenterCard({ center }) {
  return (
    <div className="center-card d-flex flex-column">
      <img src={center.image} alt={center.name} className="img-fluid" />
      <h5>{center.name}</h5>
      <p>{center.description}</p>
      <Link className="btn btn-orange" to={center.link_uri}>
        {center.link_text}
      </Link>
    </div>
  );
}
