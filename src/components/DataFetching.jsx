import React, { useEffect } from 'react';
import axios from 'axios';
import { USER_MAIN_DATA } from '../mocks/mockdata';

function DataFetching() {
  console.log(...USER_MAIN_DATA.filter((user) => user.id === 12));
  useEffect(() => {
    axios
      .get('mocks/user/12/12')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>Salut</div>
    </>
  );
}

export default DataFetching;
