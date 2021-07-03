import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchText, setPlants, handleDeletePlant }) {  
  return (
    <ul className="cards">
      {
      plants.map(plant => {
        if (searchText === '')
        return (
            <PlantCard
              key = {plant.id}
              id = {plant.id}
              image = {plant.image}
              name = {plant.name}
              price = {plant.price}
              plants = {plants}
              setPlants = {setPlants}
              handleDeletePlant = {handleDeletePlant}
            />
            )
        else if (searchText === plant.name)
        return (
          <PlantCard
            key = {plant.id}
            id = {plant.id}
            image = {plant.image}
            name = {plant.name}
            price = {plant.price}
            plants = {plants}
            handleDeletePlant = {handleDeletePlant}
          />
          )
          }
        )
      }
    </ul>
  );
}

export default PlantList;
