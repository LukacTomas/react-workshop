/**
 *
 * Create useFetch hook that should fetch the data from our BE
 * Don't consider any kind of setup,
 * only pass the createUrl from helpers to the window.fetch
 *
 * UseFetch should only accept query:string parameter
 * Return not only data, but also loading and error state
 *
 * Pro typ: make useFetch generic
 */
import { createUrl } from '../helpers/ajax.ts';
import { useEffect, useState } from 'react';

export const useFetch = <T>(query: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setData(null);
      setError(null);
      return;
    }

    async function fetchData(signal: AbortSignal) {
      setLoading(true);

      try {
        const response = await fetch(createUrl(query));

        if(!response.ok) {
          throw new Error(response.statusText);
        }
        if (!signal.aborted) {
          setData(await response.json());
        }
      } catch (err:unknown) {
        if(!signal.aborted) {
          setError((err as Error).message)
        }
      } finally {
        if(!signal.aborted) {
          setLoading(false)
        }
      }
    }

    const controller = new AbortController();
    const signal = controller.signal;

    fetchData(signal).catch(setError);

    return () => {
      controller.abort();
    }

  }, [query]);


  return {
    data,
    loading,
    error
  }
}

