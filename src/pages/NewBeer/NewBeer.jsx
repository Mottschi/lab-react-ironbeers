import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const baseApiUrl = "https://ih-beers-api2.herokuapp.com/beers";

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleTaglineChange(event) {
    setTagline(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleFirstBrewedChange(event) {
    setFirstBrewed(event.target.value);
  }

  function handleBrewersTipsChange(event) {
    setBrewersTips(event.target.value);
  }

  function handleAttenutationLevelChange(event) {
    if (event.target.value === "") return setAttenuationLevel("");
    setAttenuationLevel(parseInt(event.target.value));
  }

  function handleContributedByChange(event) {
    setContributedBy(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = `${baseApiUrl}/new`;
    const beer = {
      name,
      tagline,
      brewersTips,
      firstBrewed,
      description,
      attenuationLevel,
      contributedBy,
    };
    axios
      .post(url, beer)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        navigate("/beers");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <h1>Create a new beer!</h1>
      <div className="row justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-2 text-start col-form-label" htmlFor="name">
              Name:{" "}
            </label>
            <div className="col-8">
              {" "}
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-2 text-start col-form-label"
              htmlFor="tagline"
            >
              Tagline:{" "}
            </label>
            <div className="col-8">
              <input
                type="text"
                id="tagline"
                name="tagline"
                value={tagline}
                onChange={handleTaglineChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-2 text-start col-form-label"
              htmlFor="description"
            >
              Description:{" "}
            </label>
            <div className="col-8">
              {" "}
              <input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-2 text-start col-form-label"
              htmlFor="first_brewed"
            >
              First Brewed:{" "}
            </label>
            <div className="col-8">
              {" "}
              <input
                type="text"
                id="first_brewed"
                name="first_brewed"
                value={firstBrewed}
                onChange={handleFirstBrewedChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-2 text-start col-form-label"
              htmlFor="brewers_tips"
            >
              Brewers Tips:
            </label>
            <div className="col-8">
              {" "}
              <input
                type="text"
                id="brewers_tips"
                name="brewers_tips"
                value={brewersTips}
                onChange={handleBrewersTipsChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-2 text-start col-form-label"
              htmlFor="attenuation_level"
            >
              Attenuation Level:
            </label>
            <div className="col-8">
              {" "}
              <input
                type="number"
                id="attenuation_level"
                name="attenuation_level"
                value={attenuationLevel}
                onChange={handleAttenutationLevelChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-2 text-start col-form-label"
              htmlFor="contributed_by"
            >
              Contributed By:
            </label>
            <div className="col-8">
              <input
                type="text"
                id="contributed_by"
                name="contributed_by"
                value={contributedBy}
                onChange={handleContributedByChange}
                className="form-control"
              />
            </div>
          </div>
          <button className="btn btn-primary m-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
