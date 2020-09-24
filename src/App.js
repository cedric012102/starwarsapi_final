import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar';
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Force from './components/Force';
import Spinner from 'react-bootstrap/Spinner';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  UseRouteMatch
} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
      }

      async function fetchPlanets() {
        let res = await fetch("https://swapi.dev/api/planets/");
        let data = await res.json();
        setPlanets(data.results);
      }

      async function fetchStarships() {
        let res = await fetch("https://swapi.dev/api/starships/");
        let data = await res.json();
        setStarships(data.results);
        }

      fetchPeople();
      fetchPlanets();
      fetchStarships();
      setSpinning(false);
  }, []);
  console.log('data', starships);
  
  

  return (
    <>
      <Force />
      <Router>
      <Navbar />
      <Container>
        {spinning ? (
          <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        ) : ( 
          <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/people'>
            <People data={people}/>
          </Route>
          <Route exact path='/planets'>
            <Planets data={planets}/>
          </Route>
          <Route exact path='/starships'>
            <Starships data={starships}/>
          </Route>
        </Switch>
        )}
      </Container>
      </Router>

     </>
     
  );
}


export default App;


