import React from "react";

function BeerDetails({ beer }) {
  return (
    <div className="col-10 m-5">
      <img
        src={beer.image_url}
        alt={beer.name}
        className="img-fluid"
        style={{ maxHeight: "200px", objectFit: "contain" }}
      />
      <div className="row">
        <h5 className="col text-start">{beer.name}</h5>
        <p className="col text-end">{beer.attenuation_level}</p>
      </div>
      <div className="row">
        <p className="col text-start">{beer.tagline}</p>
        <p className="col text-end">{beer.first_brewed}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetails;
