import { useState, useEffect } from 'react';
import UserDataService from '../services/UserDataService';

function useFetch(userId, params = '', useMock = false) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new UserDataService(
          userId,
          params,
          useMock,
        ).loadSingleRequestData();
        setData(data);
      } catch (err) {
        console.log(err.message);
        setError(true);
      }
    };
    fetchData();
  }, [userId, params, useMock]);
  return { data, error };
}

export default useFetch;
