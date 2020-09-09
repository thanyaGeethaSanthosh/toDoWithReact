import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Task from './components/Task';
import InputText from './components/InputText';
import fetchAPI from './components/fetchAPI';

const ToDo = (props) => {
  const [toDo, setToDOs] = useState({});

  const updateTodo = () => fetchAPI.getTodo().then((todo) => setToDOs(todo));
  useEffect(updateTodo, []);

  const addTask = (taskDescription) => {
    fetchAPI.addTask(taskDescription).then(updateTodo);
  };
  const deleteTask = (taskId) => {
    fetchAPI.deleteTask(taskId).then(updateTodo);
  };
  const changeTaskState = (event) => {
    fetchAPI.toggleTaskStatus(event.target.id).then(updateTodo);
  };

  const changeTitle = (title) => {
    fetchAPI.setTitle(title).then(updateTodo);
  };
  const reset = () => {
    fetchAPI.resetTodo().then(updateTodo);
  };
  const toDoList = [];
  for (const key in toDo.tasks) {
    const { description, state, id } = toDo.tasks[key];
    toDoList.push(
      <Task
        task={description}
        state={state}
        key={id}
        id={key}
        deleteTask={deleteTask}
        onClickHandler={changeTaskState}
      />
    );
  }
  return (
    <div>
      <Header
        title={toDo.title}
        deleteTitle={reset}
        changeTitle={changeTitle}
      />
      {toDoList}
      <InputText submitHandler={addTask} />
    </div>
  );
};

export default ToDo;
