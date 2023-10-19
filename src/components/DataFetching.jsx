import React, { useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  useEffect(() => {
    axios
      .get('http://localhost:3000/user/12')
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
