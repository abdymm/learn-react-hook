import React, { useState, useEffect } from "react";

function Team() {
  const listTeam = [
    {
      id: 1,
      name: "FC Barcelona",
      league: "LA Liga"
    },
    {
      id: 2,
      name: "Real Madrid",
      league: "LA Liga"
    },
    {
      id: 3,
      name: "Manchester City",
      league: "Premiere League"
    },
    {
      id: 4,
      name: "Arsenal",
      league: "Premiere League"
    }
  ];
  const initialTeam = {
    id: 0,
    name: "",
    league: ""
  };
  const [team, setTeam] = useState(initialTeam);
  const [info, setInfo] = useState(""); //this is unecessary in use effect

  useEffect(() => {
    document.title = team.name;
  }, [team]);

  const setRandomTeam = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    setTeam(listTeam[randomIndex]);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12 center">
          <h4>{team.name}</h4>
          <h5>{team.league}</h5>
        </div>
        <div className="col-md-12">
          <input
            type="text"
            placeholder="Input Your Team Name"
            onChange={e => setTeam({ ...team, name: e.target.value })}
          ></input>

          <input
            type="text"
            placeholder="Input Your Team League"
            onChange={e => setTeam({ ...team, league: e.target.value })}
          ></input>

          <textarea onChange={e => setInfo(e.target.value)}>{info}</textarea>
        </div>
        <button
          className="waves-effect waves-light btn btn-block"
          onClick={setRandomTeam}
        >
          Get Random Team
        </button>
      </div>
    </div>
  );
}

export default Team;
