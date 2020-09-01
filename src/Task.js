import React from 'react';

const Task = (props) => {
  const { task, state, onClickHandler, id } = props;
  const classList = {
    todo: 'default-todo',
    doing: 'doing-todo',
    done: 'finished',
  };
  const className = classList[state];
  return (
    <div className={className} id={id} onClick={onClickHandler}>
      {task}
    </div>
  );
};

export default Task;
