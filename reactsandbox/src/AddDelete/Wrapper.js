import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import Component from './Component';
import useInput from './useInput';
import useAddDelete from './useAddDelete';



const Wrapper = () => {
  const { todos, addTodo, deleteTodo } = useAddDelete(["hello", "hi", "item three"]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <Form
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <Component todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Wrapper
