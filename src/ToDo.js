import React from 'react';
import Header from './components/header';
import Task from './components/Task';
import InputText from './components/InputText';
import { defaultState, nextState } from './components/TaskStatus';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'TODO', toDos: [] };
    this.addTask = this.addTask.bind(this);
    this.changeTaskState = this.changeTaskState.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(taskDescription) {
    const task = { description: taskDescription, state: defaultState() };
    this.setState((prevState) => {
      return {
        toDos: [...prevState.toDos, task],
      };
    });
  }

  changeTitle(title) {
    this.setState((prevState) => ({ title }));
  }

  deleteTask(taskId) {
    const todo = [...this.state.toDos];
    todo.splice(taskId, 1);
    this.setState((prevState) => ({ toDos: todo }));
  }

  changeTaskState(event) {
    const currTask = this.state.toDos[event.target.id];
    const state = nextState(currTask.state);
    const toDos = [...this.state.toDos];
    toDos[event.target.id].state = state;
    this.setState((prevState) => {
      return { toDos };
    });
  }

  render() {
    const toDoList = this.state.toDos.map(({ description, state }, index) => (
      <Task
        task={description}
        state={state}
        key={index}
        id={index}
        deleteTask={this.deleteTask}
        onClickHandler={this.changeTaskState}
      />
    ));
    return (
      <div>
        <Header title={this.state.title} changeTitle={this.changeTitle} />
        {toDoList}
        <InputText submitHandler={this.addTask} />
      </div>
    );
  }
}

export default ToDo;
