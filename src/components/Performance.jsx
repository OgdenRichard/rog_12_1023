import React from 'react';
import useFetch from '../hooks/useFetch';

function Performance() {
  const performanceData = useFetch(18, 'performance', false);
  console.log('rendering perf');
  return (
    <>
      <div>Perf data</div>
    </>
  );
}

export default Performance;
