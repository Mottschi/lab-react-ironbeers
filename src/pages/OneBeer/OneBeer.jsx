import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BeerDetails from "../../components/BeerDetails/BeerDetails";
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
        {beer ? <BeerDetails beer={beer} /> : <Loading />}
      </div>
    </div>
  );
}

export default OneBeer;
