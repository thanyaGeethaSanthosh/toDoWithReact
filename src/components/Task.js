import React from 'react';
import CloseButton from './closeButton';

const Task = (props) => {
  const { task, state, onClickHandler, id, deleteTask } = props;
  const classList = {
    todo: 'default-todo',
    doing: 'doing-todo',
    done: 'finished',
  };
  const className = classList[state];
  return (
    <div className='task-div'>
      <div className={className} id={id} onClick={onClickHandler}>
        {task}
      </div>
      <CloseButton
        onClick={() => {
          deleteTask(id);
        }}
      />
    </div>
  );
};

export default Task;
