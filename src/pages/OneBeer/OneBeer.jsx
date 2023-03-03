import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";

/*

    image
    name
    tagline
    first_brewed
    attenuation_level
    description
    contributed_by


    */

function OneBeer() {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();
  const baseApiUrl = "https://ih-beers-api2.herokuapp.com/beers";
  useEffect(() => {
    if (!id) return;

    const url = `${baseApiUrl}/${id}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setBeer(data))
      .catch((error) => console.log(error));
  }, [id]);
  console.log(beer);
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {beer ? (
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
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default OneBeer;
