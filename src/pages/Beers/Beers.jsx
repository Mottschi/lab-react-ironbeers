import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import BeerCard from "../../components/BeerCard/BeerCard";

const apiBaseUrl = "https://ih-beers-api2.herokuapp.com/beers";

function Beers() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    console.log("loading beers");

    axios
      .get(apiBaseUrl)
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(beers);
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {beers ? (
          beers.map((beer) => <BeerCard beer={beer} key={beer._id} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Beers;
