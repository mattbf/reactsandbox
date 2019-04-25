import React, {useState, useEffect} from 'react';
import useApi from './useApi.js';
import callApi from './callApi.js';

import {
  Button,
} from '@material-ui/core';

const styles = {
  wrapper: {
    display: 'flex',
  },
  div: {
    width: '50%',
    border: 'solid',
  }
}
function APITesting() {
  const url = '/posts'
  const array = useApi({
    method: 'GET',
    url: `${url}/`,

  })
  const [request, setRequest] = useState(null);
  const selectData = callApi(request)

  useEffect(() => {
    console.log("Req changed on UI Comp")
  }, [request])

  function handleClick() {
    setRequest({
      method: 'GET',
      url: '/posts',
    })
  }
  return(
    <div style={styles.wrapper}>
      <div style={styles.div}>
        <h3> API req on render </h3>
        <div>
          {array.isLoading ? 'Loading...':
            <div>
            <ul>
            {array.data.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
            </div>
          }
        </div>
      </div>
      <div style={styles.div}>
        <h3> programmatic API req </h3>
        <Button onClick={handleClick}> Click </Button>
        {request == null ? 'Loading...':
          <div>
          <ul>
          j
          </ul>
          </div>
        }
      </div>
    </div>

  )
}

export default APITesting

/*

{array.isLoading ? 'Loading...':
  <div>
  <ul>
  {array.res.data.map(item => <li key={item.id}>{item.title}</li>)}
  </ul>
  </div>
}

*/
