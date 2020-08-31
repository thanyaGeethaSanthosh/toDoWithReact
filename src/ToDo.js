import React from 'react';
import Task from './Task';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', toDos: [] };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  keyPress(event) {
    if (event.key === 'Enter') {
      this.setState((prevState) => {
        return {
          toDos: [...prevState.toDos, prevState.value],
          value: '',
        };
      });
    }
  }
  render() {
    const toDoList = this.state.toDos.map((task, index) => (
      <Task task={task} key={index} />
    ));
    return (
      <div>
        {toDoList}
        <input
          className='input-task'
          value={this.state.value}
          onKeyDown={this.keyPress}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ToDo;
