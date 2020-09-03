import React from 'react';
import CloseButton from './closeButton';
import { prettyDOM } from '@testing-library/react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover() {
    this.setState((prevState) => ({ hover: !prevState.hover }));
  }
  render() {
    const { task, state, onClickHandler, id, deleteTask } = this.props;
    const classList = {
      todo: 'default-todo',
      doing: 'doing-todo',
      done: 'finished',
    };
    const className = classList[state];
    return (
      <div
        className='left-text flex'
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className={className} id={id} onClick={onClickHandler}>
          {task}
        </div>
        {this.state.hover ? (
          <CloseButton
            onClick={() => {
              deleteTask(id);
            }}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Task;
