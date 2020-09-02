import React from 'react';

const CloseButton = (props) => {
  const { onClick } = props;
  return <div onClick={onClick}>[X]</div>;
};

export default CloseButton;
