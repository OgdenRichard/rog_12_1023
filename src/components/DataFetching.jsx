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

  return (
    <>
      <div>Fetch tryout</div>
    </>
  );
}

export default DataFetching;
