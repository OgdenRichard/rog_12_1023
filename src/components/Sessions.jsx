import React from 'react';
import useFetch from '../hooks/useFetch';

function Sessions() {
  const sessionsData = useFetch(18, 'average-sessions', false);
  console.log('rendering sessions');
  return (
    <>
      <div>Sessions data</div>
    </>
  );
}

export default Sessions;
