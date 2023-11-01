import React from 'react';
import { useParams } from 'react-router-dom';
import User from '../components/User';

function Profile() {
  const { id } = useParams();
  console.log(id);
  return (
    <main>
      <User id={18} />
    </main>
  );
}

export default Profile;
