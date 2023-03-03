import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerDetails from "../../components/BeerDetails/BeerDetails";
import Loading from "../../components/Loading/Loading";

function RandomBeer() {
  const [beer, setBeer] = useState(null);
  const baseApiUrl = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    axios
      .get(`${baseApiUrl}/random`)
      .then((response) => response.data)
      .then((data) => setBeer(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {beer ? <BeerDetails beer={beer} /> : <Loading />}
      </div>
    </div>
  );
}

export default RandomBeer;
