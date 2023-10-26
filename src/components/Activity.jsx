import React from 'react';
import useFetch from '../hooks/useFetch';

function Activity() {
  const activityData = useFetch({
    userId: 18,
    params: 'activity',
    isMocked: false,
  });
  console.log('rendering activity');
  return (
    <>
      <div>Activity data</div>
    </>
  );
}

export default Activity;
