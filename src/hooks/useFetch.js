import { useEffect, useState } from 'react';

function useFetch(url, initialState, mapData = (data) => data) {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        return response.json();
      })
      .then((data) => data && setState(mapData(data)))
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return [state, error];
}

export default useFetch;
