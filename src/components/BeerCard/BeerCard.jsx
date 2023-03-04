import React from "react";
import { Link } from "react-router-dom";

function BeerCard({ beer: { image_url, name, tagline, contributed_by, _id } }) {
  return (
    <div
      className="card col-4 sm-3 m-2"
      style={{ height: "400px", width: "350px" }}
    >
      <img
        src={image_url}
        alt={name}
        className="img-fluid"
        style={{ maxHeight: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{tagline}</p>
        <p className="card-text">{contributed_by}</p>
        <Link to={`/beers/${_id}`}>Find out more about this beer!</Link>
      </div>
    </div>
  );
}

export default BeerCard;
