import React from 'react';
import {useEffect, useState} from 'react';

function SampleComponent(key, name) {
  return(
    <div>
      <ul>
        <li> {name} </li>
      </ul>
    </div>
  )
}

function Add() {
  const [children, setChildren] = useState(
    [
      {id: 1, name: "Chris", backgroundcolor: '000000'},
      {id: 2, name: "Matt", backgroundcolor: '00C853'},
    ]
  )
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
    setChildren(children.concat([{id: 3, name: "Matt", backgroundcolor: '00C853'}]))
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

export default Add
