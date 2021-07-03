import React from "react";
import { useState } from 'react';

function PlantCard(props) { 
  const [isInStock, setIsInStock] = useState(true)
  const [updatePrice, setUpdatePrice] = useState(0)
  
  function handleStockClick() { 
    setIsInStock(isInStock ? false : true)
  }

  function handleDeletePlant(e) {
    fetch(`http://localhost:6001/Plants/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    e.target.parentNode.remove()
    props.setPlants(props.plants)
  }

  function handlePriceChange(e) {
    setUpdatePrice(e.target.value)
  }

  function submitPriceChange(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/Plants/${props.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: updatePrice
      })
    })
    e.target.parentNode.childNodes[2].textContent = `Price: ${updatePrice}`
    e.target.childNodes[0].value = ''
  }
  
  return (
    <li key={props.id} className="card">
        <img src={props.image} alt={props.name} />
        <h4>{props.name}</h4>
        <p>Price: {props.price}</p>
        {isInStock ? (
            <button onClick={handleStockClick} className="primary">In Stock</button>
        ) : (
            <button onClick={handleStockClick}>Out of Stock</button>
        )}
        <button onClick={handleDeletePlant} style={{ color: 'red' }}>Delete Plant</button>
        <form onSubmit={submitPriceChange}>
          <input onChange={handlePriceChange} type='number' step='0.01' placeholder='0.00'/>
          <button type='submit'>Change Price</button>
        </form>
    </li>
  )
}

export default PlantCard;
