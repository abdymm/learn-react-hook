import React, { useState, useReducer } from "react";

const initialPeople = {
  id: 0,
  name: ""
};
const initialPeoples = [
  {
    id: 2,
    name: "Malik"
  },
  {
    id: 1,
    name: "Abdy"
  },

  {
    id: 3,
    name: "Mulky"
  }
];

function RandomPeople() {
  const [people, setPeople] = useState(initialPeople);

  const reducer = (state, action) => {
    switch (action.type) {
      case "asc":
        return [...state].sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      case "desc":
        return [...state].sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
      case "reset":
        return initialPeoples;
      case "clear":
        return [];
      case "add":
        const newPeople = people;
        newPeople.id = state.length + 1;
        return [...state, newPeople];
      default:
        return state;
    }
  };

  const [peoples, dispatch] = useReducer(reducer, initialPeoples);

  return (
    <div className="center">
      {peoples.map(people => (
        <p>{people.name}</p>
      ))}
      <div className="people-box-action">
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "asc" })}
        >
          Sort ASC
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "desc" })}
        >
          Sort DESC
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "reset" })}
        >
          RESET
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "clear" })}
        >
          CLEAR
        </button>
      </div>
      <div className="row">
        <input
          type="text"
          value={people.name}
          onChange={e => setPeople({ ...people, name: e.target.value })}
        ></input>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "add" })}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default RandomPeople;
