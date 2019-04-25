import React, { useState, useEffect } from "react";
import axios from "axios";

function callApi(request) {
  const [res, setRes] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });
  const [req, setReq] = useState(null)

  useEffect(() => {
    console.log("Use effect in callApi called")
    //if (req == null) return;
    //setReq(request)
    doReq(request);
  }, [request]);


  function doReq(request) {
    console.log("Do Req called")
    setRes({
      data: null,
      isLoading: true,
      isError: false,
    });

    axios(request)
      .then(res =>
        setRes({
          data: res.data,
          isLoading: false,
          isError: false,
        }),
        console.log(request),
        console.log(res)
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

  return res;
}

}

export default callApi


// refer to https://medium.com/@jaryd_34198/seamless-api-requests-with-react-hooks-part-2-3ab42ba6ad5c
