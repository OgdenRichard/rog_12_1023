import React from 'react';
import useFetch from '../hooks/useFetch';

function Activity() {
  const activityData = useFetch(18, 'activity', false);
  console.log('rendering activity');
  return (
    <>
      <div>Activity data</div>
    </>
  );
}

export default Activity;
