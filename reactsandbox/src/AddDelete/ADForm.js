import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInput from './useInput';

const ADForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInput();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default ADForm;
