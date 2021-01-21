import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    // Prevention de tâche par défaut
    e.preventDefault();
    if (name.length !== 0) {
      console.log(`La valeur de l'input est: ${name}`);
      props.addTask(name);

      // Ajouter une tâche
      //Réinitialiser l'entrée après un Submit
      setName("");
    } else {
      alert(" Vous devez saisir une entrée!");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
