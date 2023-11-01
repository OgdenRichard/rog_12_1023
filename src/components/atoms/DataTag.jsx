import React from 'react';

function DataTag({ value, unit, name, image, color }) {
  return (
    <>
      <div className="datatag">
        <div className="datatag__icon" style={{ backgroundColor: `#${color}` }}>
          <img src={`${image}`} alt={`icône ${name}`} />
        </div>
        <div className="datatag__text">
          <h2>
            {value}
            {unit}
          </h2>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
}

export default DataTag;
