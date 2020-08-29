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
          toDos: prevState.toDos.concat([
            { task: prevState.value, done: false },
          ]),
          value: '',
        };
      });
    }
  }
  render() {
    const toDoList = this.state.toDos.map(({ task, done }, index) => (
      <Task task={task} done={done} key={index} />
    ));
    return (
      <div>
        {toDoList}
        <input
          value={this.state.value}
          onKeyDown={this.keyPress}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ToDo;
