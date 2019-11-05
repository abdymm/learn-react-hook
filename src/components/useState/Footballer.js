import React, { useState } from "react";

function Footballer() {
  const footballerListData = [
    {
      id: 1,
      name: "Frankie De Jong",
      country: "Netherland",
      number: 21
    },
    {
      id: 2,
      name: "Arthur Melo",
      country: "Brazil",
      number: 6
    }
  ];
  const footballerData = {
    id: 0,
    name: "",
    country: "",
    number: 0,
    position: "",
    club: ""
  };
  const [footballer, setFootballer] = useState(footballerData);
  const [footballerList, setFootballerList] = useState(footballerListData);

  const saveFootballer = () => {
    if (footballer.name !== "" && footballer.number !== "") {
      if (footballer.id === 0) {
        addNewPlayer();
      } else {
        editPlayer();
      }
      clearFootballer();
    } else {
      alert("Required");
    }
  };

  const addNewPlayer = () => {
    setFootballerList([
      ...footballerList,
      {
        id: footballerList.length + 1,
        name: footballer.name,
        number: footballer.number
      }
    ]);
  };

  const editPlayer = () => {
    const foundFootballerIndex = footballerList.findIndex(item => {
      return item.id === footballer.id;
    });

    footballerList[foundFootballerIndex] = footballer;
    setFootballerList([...footballerList]);
  };

  const selectFootballer = footballer => {
    setFootballer(footballer);
  };

  const clearFootballer = () => {
    setFootballer(footballerData);
  };

  return (
    <div>
      <div className="List center">
        <ul className="collection">
          {footballerList.map(item => (
            <a
              href={"#" + item.number}
              className="collection-item"
              onClick={() => selectFootballer(item)}
              key={item.number}
            >
              {item.name} ({item.number})
            </a>
          ))}
        </ul>
      </div>
      <div className="Profile row center">
        <h6>Add/Edit Player</h6>
        <input type="hidden" value={footballer.id} />
        <input
          placeholder="Player Name"
          type="text"
          value={footballer.name}
          onChange={e => setFootballer({ ...footballer, name: e.target.value })}
        />
        <input
          placeholder="Player Number"
          type="number"
          value={footballer.number > 0 ? footballer.number : ""}
          onChange={e =>
            setFootballer({ ...footballer, number: e.target.value })
          }
        />
        <div className="col-md-12">
          <button
            className="waves-effect waves-light btn btn-block"
            onClick={saveFootballer}
          >
            Save Footballer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footballer;
