import { useState, useEffect } from 'react';

function UseQuery(userId, params, isMocked) {
  const [data, setData] = useState({});
  useEffect(() => {
    const data = {};
    setData(data);
  }, [userId, params, isMocked]);
  return { data };
}

export default UseQuery;
