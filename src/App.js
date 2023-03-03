import "./App.css";
import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Beers from "./pages/Beers/Beers";
import NewBeer from "./pages/NewBeer/NewBeer";
import OneBeer from "./pages/OneBeer/OneBeer";
import RandomBeer from "./pages/RandomBeer/RandomBeer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:id" element={<OneBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
