import React, { useReducer } from "react";

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
const reducer = (state, action) => {
  switch (action) {
    case "asc":
      return [...state].sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    case "desc":
      return [...state].sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
    case "reset":
      return initialPeoples;
    case "clear":
      return [];
    default:
      return state;
  }
};

function RandomPeople() {
  const [peoples, dispatch] = useReducer(reducer, initialPeoples);
  console.log(peoples);
  return (
    <div className="center">
      {peoples.map(people => (
        <p>{people.name}</p>
      ))}
      <div className="people-box-action">
        <button className="btn btn-success" onClick={() => dispatch("asc")}>
          Sort ASC
        </button>
        <button className="btn btn-success" onClick={() => dispatch("desc")}>
          Sort DESC
        </button>
        <button className="btn btn-success" onClick={() => dispatch("reset")}>
          RESET
        </button>
        <button className="btn btn-success" onClick={() => dispatch("clear")}>
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default RandomPeople;
