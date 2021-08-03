import { useEffect, useState } from 'react';

const defaulOptions = {
  afterFetch: () => {},
  beforeFetch: () => {},
  extractData: (body) => body,
  extractBody: (response) => response.json(),
};

function useFetch(url, options = defaulOptions) {
  const {
    afterFetch,
    beforeFetch,
    extractBody,
    extractData,
    fetchOptions,
    initialState,
  } = { ...defaulOptions, ...options };

  const [state, setState] = useState(initialState);
  const [error, setError] = useState();

  useEffect(() => {
    if (url) {
      beforeFetch();

      fetch(url, fetchOptions)
        .then((response) => response.ok && extractBody(response))
        .then((body) => body && setState(extractData(body)))
        .catch((error) => setError(error))
        .finally(afterFetch);
    }
  }, [afterFetch, beforeFetch, extractBody, extractData, fetchOptions, url]);

  return [state, error];
}

export default useFetch;
