import React from 'react';
import User from '../components/User';

function Profile({ userId }) {
  return (
    <main>
      <User id={userId} />
    </main>
  );
}

export default Profile;
