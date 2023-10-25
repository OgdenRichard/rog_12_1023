import React, { useEffect } from 'react';
import UserDataService from '../services/UserDataService';

function DataFetching({ isMocked }) {
  useEffect(() => {
    const fetcho = new UserDataService(12, 'performance', true);
    fetcho.init();
    /* isMocked
      ? console.log(...USER_MAIN_DATA.filter((user) => user.id === 12))
      : axios
          .get('mocks/user/12/maindata')
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          }); */
  }, [isMocked]);

  return (
    <>
      <div>Salut, il fetcho</div>
    </>
  );
}

export default DataFetching;
