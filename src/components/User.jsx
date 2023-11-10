import React from 'react';
import useFetch from '../hooks/useFetch';
import Activity from './charts/Activity';
import Performance from './charts/Performance';
import Sessions from './charts/Sessions';
import DataTag from './atoms/DataTag';
import UserScore from './charts/UserScore';
import { ApiContext } from '../App';
import { useContext } from 'react';
import { ErrorPage } from './pages/ErrorPage';

function User() {
  const api = useContext(ApiContext);
  const userData = useFetch(api.userId, '', api.useMock);
  const keyData = userData.data.keyData;
  console.log(userData.data);
  return (
    <>
      {Object.keys(userData.data).length ? (
        <>
          <div className="user__title">
            <h1>
              Bonjour{' '}
              <span className="red_text">{userData.data.firstName}</span>
            </h1>
            <p>Félicitations! vous avez explosé vos objectifs hier 💩</p>
          </div>
          <div className="user__main_wrapper">
            <section className="user__graphs">
              <div className="user__activity_wrapper">
                <h3 className="activity_graph__title">Activité quotidienne</h3>
                <Activity />
              </div>
              <div className="user__secondary_wrapper">
                <Sessions />
                <Performance />
                <UserScore chartData={userData.data.scoreData} />
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
      ) : (
        <ErrorPage
          message={'Les données de votre compte utilisateur sont indisponibles'}
        />
      )}
    </>
  );
}

export default User;
