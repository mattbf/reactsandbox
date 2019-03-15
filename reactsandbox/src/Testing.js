import React, { useState, useEffect } from "react";
import useApi from './API/useApi.js';

function Testing() {
  const url = "/todos";
  const [count, setCount] = useState(1);
  const array = useApi({
    method: "GET",
    url: `${url}/` // can append ${count}
  });

  return(
    <div>
      {array.isLoading ? 'Loading...':
        <div>
        <ul>
        {array.data.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
        </div>
      }
    </div>
  )
}

export default Testing


/*

<button onClick={() => setCount(count + 1)}>Next Todo</button>
<h1>Todo {count}</h1>
<div>
  {(todo.isLoading && 'Loading...') ||
    (!todo.isLoading && todo.data.title)
  }
</div>


{todo.isLoading ? 'Loading...':
  <div></div>
}

*/
