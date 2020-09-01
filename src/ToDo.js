import React from 'react';
import Task from './components/Task';
import InputText from './components/InputText';
import { defaultState, nextState } from './components/TaskStatus';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titleBar: { title: 'TODO', editable: false }, toDos: [] };
    this.addTask = this.addTask.bind(this);
    this.changeTaskState = this.changeTaskState.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.toggleEditable = this.toggleEditable.bind(this);
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
    const { editable } = this.state.titleBar;
    this.setState((prevState) => ({
      titleBar: { title, editable: !editable },
    }));
  }

  toggleEditable(event) {
    const { title, editable } = this.state.titleBar;
    this.setState((prevState) => ({
      titleBar: { title, editable: !editable },
    }));
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
    const { editable, title } = this.state.titleBar;
    const todoTitle = editable ? (
      <InputText defaultValue={title} submitHandler={this.changeTitle} />
    ) : (
      <h3 onClick={this.toggleEditable}>{title}</h3>
    );
    return (
      <div>
        {todoTitle}
        {toDoList}
        <InputText submitHandler={this.addTask} />
      </div>
    );
  }
}

export default ToDo;
