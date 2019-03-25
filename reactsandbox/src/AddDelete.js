import React from 'react';
import {useEffect, useState} from 'react';

function SampleComponent(key, name) {
  return(
    <div>
      <ul>
        <li> {name} </li>
      </ul>
      <button> 
    </div>
  )
}

function AddDelete() {
  const [children, setChildren] = useState(
    [
      {id: 1, name: "Chris"},
    ]
  )
  //const [count, setCount] = useState(1)
  const childrenList = (
    <ul>
      {children.map((item) =>
        <li key={item.id}>
          {item.name}
        </li>
      )}
    </ul>
  );

  function addChild() {
    setChildren(children.concat([{id: 3, name: "Matt"}]))
  }

  function deleteChild(id) {
    const newChildren = children
    .filter((id) => id !== )

  }

  return(
    <div>
      <h1> Add and Delete </h1>
      <div>
        {childrenList}
      </div>
      <button onClick={addChild}> Add Component </button>
    </div>
  )
}

export default AddDelete
