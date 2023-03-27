/**
A custom React hook that fetches data from an API endpoint and returns the response, loading state and error state.
@function useFetch
@param {string} url - The URL of the API endpoint to fetch data from.
@returns {{  data: any, error: boolean }} - An object containing the loading state, data and error state.
*/
import { useState, useEffect } from "react";
export function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    let controller = new AbortController();
    async function fetchData() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } 
    }

    fetchData();
    return () => controller?.abort();
  }, [url]);

  return {  data, error };
}
