import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router';

import HomePage from './components/HomePage/HomePage';
import Layout from './Layout/Layout';

function App() {
  const apiBaseUrl = 'https://ih-beers-api2.herokuapp.com/beers';

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route element={<Layout />}>
          <Route path='/beers' element={<h1>Beers</h1>}/>
          <Route path='/random-beer' element={<h1>Random Beer</h1>}/>
          <Route path='/new-beer' element={<h1>New Beer</h1>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
