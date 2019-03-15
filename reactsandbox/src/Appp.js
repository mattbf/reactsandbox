import React, { useState, useEffect } from "react";
import axios from "axios";
import useEndpoint from './Endpoint.js';

export default function Appp() {
  const todosApi = "https://jsonplaceholder.typicode.com/todos";
  const [count, setCount] = useState(1);
  const todo = useEndpoint({
    method: "GET",
    url: `${todosApi}/${count}`
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Next Todo</button>
      <h1>Todo {count}</h1>
      <div>
        {(todo.pending && "Loading...") || (todo.complete && todo.data.title)}
      </div>
    </div>
  );
}
