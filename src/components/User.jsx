import React from 'react';
import useFetch from '../hooks/useFetch';
import Activity from './Activity';
import Performance from './Performance';
import Sessions from './Sessions';
import DataTag from './atoms/DataTag';
import UserScore from './UserScore';

function User({ id }) {
  const userData = useFetch(id, '', false);
  const keyData = userData.data.keyData;
  // console.log(userData);
  return (
    <>
      {userData && (
        <h1>
          Bonjour <span className="red_text">{userData.data.firstName}</span>
        </h1>
      )}
      <div className="user__main_wrapper">
        <section className="user__graphs">
          <Activity userId={id} />
          <div className="user__secondary_wrapper">
            <Sessions userId={id} />
            <Performance userId={id} />
            {userData && <UserScore chartData={userData.data.scoreData} />}
          </div>
        </section>
        <aside className="tags__wrapper">
          {keyData &&
            keyData.map((data, index) => (
              <DataTag
                key={index}
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
