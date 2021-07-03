import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from 'react';

function PlantPage({ plants, setPlants }) {
  const [formInput, setFormInput] = useState({
    name: '',
    image: '',
    price: '',
  })

  function handleNewPlantSubmit(e) {
    e.preventDefault()
    const newPlant = {
      name: e.target[0].value,
      image: e.target[1].value,
      price: e.target[2].value
    }
    setPlants([...plants, newPlant])
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant)
    })
  }

  const [searchText, setSearchText] = useState('')

  function handleSearchText(e) {
    setSearchText(e.target.value)
  }
  
  return (
    <main>
      <NewPlantForm 
      plants = {plants}
      formInput = {formInput}
      setFormInput = {setFormInput}
      handleNewPlantSubmit = {handleNewPlantSubmit}
        />
      <Search 
        searchText = {searchText}
        setSearchText = {setSearchText}
        handleSearchText = {handleSearchText}
      />
      <PlantList 
        plants = {plants}
        searchText = {searchText}
        setPlants = {setPlants}
        />
    </main>
  );
}

export default PlantPage;
