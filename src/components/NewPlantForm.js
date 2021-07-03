import React from "react";

function NewPlantForm(props) {
  function handleInputChange(e) {
    props.setFormInput({
      ...props.formInput,
      [e.target.name]: e.target.value})
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={props.handleNewPlantSubmit}>
        <input onChange={handleInputChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleInputChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleInputChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
