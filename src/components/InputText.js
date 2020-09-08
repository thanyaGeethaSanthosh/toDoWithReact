import React, { useState } from 'react';

const InputText = (props) => {
  const [state, setState] = useState({ value: props.defaultValue || '' });
  const keyPress = (event) => {
    if (event.key === 'Enter') {
      props.submitHandler(state.value);
      setState({ value: '' });
    }
  };
  const handleChange = (event) => {
    setState({ value: event.target.value });
  };

  return (
    <input
      className='input-task'
      value={state.value}
      onKeyDown={keyPress}
      onChange={handleChange}
    />
  );
};
export default InputText;
