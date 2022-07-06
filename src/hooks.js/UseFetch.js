import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [state, setState] = useState({
    data: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        setState({ data: false, loading: false, error });
      });
  }, []);

  return state;
}
