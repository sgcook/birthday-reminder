import React from "react";

const Person = ({ id, name, age, image, removePerson }) => {
  return (
    <div className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      <button className="singleButton" onClick={() => removePerson(id)}>
        Remove
      </button>
    </div>
  );
};

export default Person;
