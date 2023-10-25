import React, { useState, useEffect } from 'react';
import UserDataService from '../services/UserDataService';

function DataFetching({ isMocked }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await new UserDataService(18, '', false).loadData();
      setData(data);
    };
    fetchData();
  }, [isMocked]);

  return (
    <>
      <div>{data.firstName}</div>
    </>
  );
}

export default DataFetching;
