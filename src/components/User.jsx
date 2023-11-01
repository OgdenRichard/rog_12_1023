import React from 'react';
import useFetch from '../hooks/useFetch';
import Activity from './Activity';
import Performance from './Performance';
import Sessions from './Sessions';
import DataTag from './atoms/DataTag';

function User({ id }) {
  const userData = useFetch(id, '', false);
  const keyData = userData.data.keyData;
  console.log(keyData);
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
        <aside>
          {keyData &&
            keyData.map((data) => (
              <DataTag
                value={data.value}
                unit={data.unit}
                name={data.name}
                image={data.image}
                color={data.background}
              />
            ))}
        </aside>
      </div>
    </>
  );
}

export default User;
