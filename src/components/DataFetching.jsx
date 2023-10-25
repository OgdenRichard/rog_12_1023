import React, { useEffect } from 'react';
import UserDataService from '../services/UserDataService';

function DataFetching({ isMocked }) {
  useEffect(() => {
    const fetcho = new UserDataService(18, '', false);
    fetcho.init();
  }, [isMocked]);

  return (
    <>
      <div>Salut, il fetcho</div>
    </>
  );
}

export default DataFetching;
