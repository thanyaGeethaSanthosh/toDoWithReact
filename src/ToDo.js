import React from 'react';
import Task from './Task';
import InputText from './InputText';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDos: [] };
    this.addTask = this.addTask.bind(this);
  }

  addTask(taskDescription) {
    const task = { description: taskDescription };
    this.setState((prevState) => {
      return {
        toDos: [...prevState.toDos, task],
      };
    });
  }

  render() {
    const toDoList = this.state.toDos.map(({ description }, index) => (
      <Task task={description} key={index} />
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
