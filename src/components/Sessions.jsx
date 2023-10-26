import React from 'react';
import useFetch from '../hooks/useFetch';

function Sessions() {
  const sessionsData = useFetch({
    userId: 18,
    params: 'average-sessions',
    isMocked: false,
  });
  console.log('rendering sessions');
  return (
    <>
      <div>Sessions data</div>
    </>
  );
}

export default Sessions;
