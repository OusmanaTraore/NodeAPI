/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    // Définitio du modèle de nouvelle tâche
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    // Ajout de nouvelles tâches à la liste des tâches pré-éxistantes
    setTasks([...tasks, newTask]);
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      //Si la tâche à le même ID que la tâche éditée
      if (id === task.id) {
        // On utilise "object spread " pour créer un nouvel objet
        // dont la completude est inversée
        return { ...task, completed: !task.completed };
      }
      console.log(task);
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id) {
    console.log(id);
    const remainigTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainigTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // Si la tâche à le même ID que la tâche éditée
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  const [filter, setFilter] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));
  // const filtreList = props.filtres.map((filtre) => (
  //   <FilterButton id={filtre.id} name={filtre.name} key={filtre.id} />
  // ));
  const tasksNoun =
    (taskList.length !== 1) | (taskList.length !== 0) ? "tasks" : "task";
  const headingText = `${taskList.length}  ${tasksNoun} remaining`;

  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading"> {headingText} </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
