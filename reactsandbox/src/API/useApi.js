import React, { useState, useEffect } from "react";
import axios from "axios";

function useApi(req) {
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
    axios(req)
      .then(res =>
        setRes({
          data: res.data,
          isLoading: false,
          isError: false,
        }),
      )
      .catch(() =>
        setRes({
          data: null,
          isLoading: false,
          isError: true,
        }),
      );
  }, [req.url]);
  return res;
}

export default useApi


// refer to https://medium.com/@jaryd_34198/seamless-api-requests-with-react-hooks-part-2-3ab42ba6ad5c