import React from 'react';

function ImgShuff(props) {
  return (
    <div>
      {props.results.map(result => (
        <img
          key={result.id}
          alt={result.name}
          state={resutls.clicked}
          className="click-item"
          src={result.image}
        />
      ))}
    </div>
  );
}

export default ImgShuff;
