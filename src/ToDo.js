import React from 'react';
import Task from './Task';
import InputText from './InputText';
import { defaultState, nextState } from './TaskStatus';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDos: [] };
    this.addTask = this.addTask.bind(this);
    this.changeTaskState = this.changeTaskState.bind(this);
  }

  addTask(taskDescription) {
    const task = { description: taskDescription, state: defaultState() };
    this.setState((prevState) => {
      return {
        toDos: [...prevState.toDos, task],
      };
    });
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
        onClickHandler={this.changeTaskState}
      />
    ));
    return (
      <div>
        {toDoList}
        <InputText submitHandler={this.addTask} />
      </div>
    );
  }
}

export default ToDo;
