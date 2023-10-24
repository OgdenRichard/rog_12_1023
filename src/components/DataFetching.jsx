import React, { useEffect } from 'react';
import axios from 'axios';
import { USER_MAIN_DATA } from '../mocks/mockdata';
import Tryout from '../services/UserData';

function DataFetching({ isMocked }) {
  useEffect(() => {
    const fetcho = new Tryout(12, '', false);
    fetcho.getData();
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
