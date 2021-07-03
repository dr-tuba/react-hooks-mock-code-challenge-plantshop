import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState, useEffect} from 'react';

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then((data) => {
        setPlants(data)
      });
  }, [])
  
  return (
    <div className="app">
      <Header />
      <PlantPage plants = {plants} setPlants = {setPlants}/>
    </div>
  );
}

export default App;
