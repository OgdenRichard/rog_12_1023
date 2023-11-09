import React from 'react';
import User from '../User';
import SideBar from '../layouts/SideBar';

function Profile({ userId }) {
  return (
    <main>
      <SideBar />
      <User id={userId} />
    </main>
  );
}

export default Profile;