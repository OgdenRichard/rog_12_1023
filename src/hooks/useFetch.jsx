import { useState, useEffect } from 'react';
import UserDataService from '../services/UserDataService';

function useFetch(userId, params = '', useMock = false) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await new UserDataService(
        userId,
        params,
        useMock,
      ).loadData();
      setData(data);
    };
    fetchData();
  }, [userId, params, useMock]);
  return { data };
}

export default useFetch;
