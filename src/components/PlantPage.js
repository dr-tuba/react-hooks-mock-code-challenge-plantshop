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
    id: ''
  })

  function handleNewPlantSubmit(e) {
    e.preventDefault()
    const newPlant = {
      name: e.target[0].value,
      image: e.target[1].value,
      price: e.target[2].value,
      id: plants.length + 1
    }
    setPlants([...plants, newPlant])
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant)
    })
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = ''
  }

  const [searchText, setSearchText] = useState('')

  function handleSearchText(e) {
    setSearchText(e.target.value)
  }
  
  function handleDeletePlant(e) {
    fetch(`http://localhost:6001/Plants/${e.target.parentNode.childNodes[1].id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const updatedArray = plants.splice(0, e.target.parentNode.childNodes[1].id - 1)
    setPlants(updatedArray)
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
        handleDeletePlant = {handleDeletePlant}
        />
    </main>
  );
}

export default PlantPage;
