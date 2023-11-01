import React from 'react';
import useFetch from '../hooks/useFetch';
import Activity from './Activity';
import Performance from './Performance';
import Sessions from './Sessions';

function User({ id }) {
  const userData = useFetch(id, '', false);
  console.log(userData);
  return (
    <>
      <h1>
        Bonjour <span className="red_text">{userData.data.firstName}</span>
      </h1>
      <div className="user__main_wrapper">
        <section>
          <Activity userId={id} />
          <div className="user__secondary_wrapper">
            <Performance userId={id} />
            <Sessions userId={id} />
          </div>
        </section>
        <aside></aside>
      </div>
    </>
  );
}

export default User;
