import React, { useState, useEffect } from "react";
import axios from "axios";

//Get local state (Has refresh token from previous or current session saved to local state)

function useRefreshToken(req) {
  const [res, setRes] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    setRes({
      data: null,
      isLoading: true,
      isError: false,
    });

    //change to function so that it can be called separately
    axios(req)
      .then(res =>
        setRes({
          data: res.data,
          isLoading: false,
          isError: false,
        }),
      )
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          //call refresh token function which will return a new access token or an error
          // if a token is returned try the axios request above again
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        });
    }, [req.url]);
  return res;
}

function refreshToken() {
  const url = " /api/token/refresh/";
  const refresh = localstorage.getItem('refresh') // Change to local state
  const array = useRefreshToken({
    method: "POST",
    url: url // can append ${count}
    refresh: refresh
  });

  // Save new token,  and update state and local storage

  return token
}


export default refreshToken
