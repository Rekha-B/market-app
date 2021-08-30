import React from 'react';
import './inputBox.scss';

const InputBox = props => {
  return <input className="main" {...props} placeholder={props.placeholder} />;
};

export default InputBox;
