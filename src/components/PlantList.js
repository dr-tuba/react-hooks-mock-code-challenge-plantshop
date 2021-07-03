import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchText, setPlants }) {  
  return (
    <ul className="cards">
      {
      plants.map(plant => {
        if (plant.name.toLowerCase().startsWith(searchText.toLowerCase()))
        return (
            <PlantCard
              key = {plant.id}
              id = {plant.id}
              image = {plant.image}
              name = {plant.name}
              price = {plant.price}
              plants = {plants}
              setPlants = {setPlants}
            />
            )
          }
        )
      }
    </ul>
  );
}

export default PlantList;
