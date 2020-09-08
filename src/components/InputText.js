import React, { useState } from 'react';

const InputText = (props) => {
  const [value, setValue] = useState(props.defaultValue || '');
  const keyPress = (event) => {
    if (event.key === 'Enter') {
      props.submitHandler(value);
      setValue('');
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      className='input-task'
      value={value}
      onKeyDown={keyPress}
      onChange={handleChange}
    />
  );
};
export default InputText;
