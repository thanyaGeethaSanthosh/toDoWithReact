import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
    this.handleOnCLick = this.handleOnCLick.bind(this);
  }

  handleOnCLick(event) {
    this.setState((prevState) => ({ done: !prevState.done }));
  }

  render() {
    return (
      <div
        className={this.state.done ? 'finished' : 'not-finished'}
        onClick={this.handleOnCLick}
      >
        {this.props.task}
      </div>
    );
  }
}

export default Task;
