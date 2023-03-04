import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import BeerCard from "../../components/BeerCard/BeerCard";

const apiBaseUrl = "https://ih-beers-api2.herokuapp.com/beers";

function Beers() {
  const [beers, setBeers] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const url = new URL(apiBaseUrl);

    /* if there is no query term, we simply fetch all beers, but if
       there is one, we change the url to fetch from to the search
       and add the query parameter
     */
    if (query !== "") {
      url.pathname += "/search";
      url.searchParams.set("q", query);
    }

    axios
      .get(url)
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  }, [query]);

  function handleSearch(event) {
    setQuery(event.target.value);
  }
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center m-3">
        <div>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={handleSearch}
          />
        </div>
      </div>
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
