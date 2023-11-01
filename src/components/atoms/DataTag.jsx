import React from 'react';

function DataTag({ value, unit, name, image, color }) {
  return (
    <>
      <div style={{ backgroundColor: `#${color}` }}>
        <img src={`${image}`} alt={`icône ${name}`} />
        <h2>
          {value}
          {unit}
        </h2>
        <p>{name}</p>
      </div>
    </>
  );
}

export default DataTag;
