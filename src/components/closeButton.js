import React from 'react';

const CloseButton = (props) => {
  const { onClick } = props;
  const image = (
    <img src={`../public/icons/close.png`} alt='X' onClick={onClick}></img>
  );
  return <div className='close-icon'>{image}</div>;
};

export default CloseButton;
