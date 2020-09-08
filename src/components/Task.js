import React, { useState } from 'react';
import CloseButton from './closeButton';

const Task = (props) => {
  const { task, state, onClickHandler, id, deleteTask } = props;
  const classList = {
    todo: 'default-todo',
    doing: 'doing-todo',
    done: 'finished',
  };
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(!hover);
  const className = classList[state];
  return (
    <div
      className='left-text flex'
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className={className} id={id} onClick={onClickHandler}>
        {task}
      </div>
      {hover ? (
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
};

export default Task;
