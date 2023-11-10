import React from 'react';

function FetchError({ color = '#e60000' }) {
  return (
    <>
      <div className="error__display" style={{ color: `${color}` }}>
        Erreur : données indisponibles
      </div>
    </>
  );
}

export default FetchError;
