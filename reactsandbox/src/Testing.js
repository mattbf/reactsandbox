import React, { useState, useEffect } from "react";
import useApi from './useApi.js';

function Testing() {
  const todosApi = "https://jsonplaceholder.typicode.com/todos";
  const [count, setCount] = useState(1);
  const todo = useApi({
    method: "GET",
    url: `${todosApi}/${count}`
  });

  return(
    <div>
        <button onClick={() => setCount(count + 1)}>Next Todo</button>
        <h1>Todo {count}</h1>
        <div>
          {(todo.isLoading && 'Loading...') ||
            (!todo.isLoading && todo.data.title)
          }
        </div>
      </div>
  )
}

export default Testing
