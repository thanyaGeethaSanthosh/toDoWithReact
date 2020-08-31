import React from 'react';

const Status = function (statusList) {
  const statuses = [...statusList];
  let index = 0;
  const length = statuses.length;
  return function () {
    index = index + 1;
    return statuses[((index % length) + length) % length];
  };
};

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: Status(['todo', 'doing', 'done']), done: 'todo' };
    this.handleOnCLick = this.handleOnCLick.bind(this);
  }

  handleOnCLick(event) {
    const done = this.state.status();
    this.setState((prevState) => {
      return { done: done };
    });
  }

  render() {
    const classList = {
      todo: 'default-todo',
      doing: 'doing-todo',
      done: 'finished',
    };
    const className = classList[this.state.done];
    return (
      <div className={className} onClick={this.handleOnCLick}>
        {this.props.task}
      </div>
    );
  }
}

export default Task;
