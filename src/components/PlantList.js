import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchText, setPlants }) {
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
          />
          )
          }
        )
      }
    </ul>
  );
}

export default PlantList;
