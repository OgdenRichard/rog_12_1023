import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

function DataFetching({ isMocked }) {
  const userData = useFetch(18);
  const performanceData = useFetch(18, 'performance');
  const activityData = useFetch(18, 'activity');
  const sessionsData = useFetch(18, 'average-sessions');
  console.log(userData);
  console.log(performanceData);
  console.log(activityData);
  console.log(sessionsData);
  /* useEffect(() => {
    const fetchData = async () => {
      const data = await new UserDataService(18, '', false).loadData();
      setData(data);
    };
    fetchData();
  }, [isMocked]); */

  return (
    <>
      <div>{userData.data.firstName}</div>
    </>
  );
}

export default DataFetching;
