import React, { useState } from 'react';
import Header from './components/header';
import Task from './components/Task';
import InputText from './components/InputText';
import { defaultState, nextState } from './components/TaskStatus';

const ToDo = (props) => {
  const [title, setTitle] = useState('TODO');
  const [toDos, setToDOs] = useState([]);

  const addTask = (taskDescription) => {
    const task = { description: taskDescription, state: defaultState() };
    setToDOs([...toDos, task]);
  };

  const changeTitle = (title) => setTitle(title);
  const deleteTask = (taskId) => {
    const todo = [...toDos];
    todo.splice(taskId, 1);
    setToDOs(todo);
  };
  const changeTaskState = (event) => {
    const currTask = toDos[event.target.id];
    const state = nextState(currTask.state);
    const toDo = [...toDos];
    toDo[event.target.id].state = state;
    setToDOs(toDo);
  };

  const reset = () => {
    changeTitle('TODO');
    setToDOs([]);
  };
  const toDoList = toDos.map(({ description, state }, index) => (
    <Task
      task={description}
      state={state}
      key={index}
      id={index}
      deleteTask={deleteTask}
      onClickHandler={changeTaskState}
    />
  ));
  return (
    <div>
      <Header title={title} deleteTitle={reset} changeTitle={changeTitle} />
      {toDoList}
      <InputText submitHandler={addTask} />
    </div>
  );
};

export default ToDo;
