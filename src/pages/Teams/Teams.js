import TeamCard from "../../components/TeamCards/TeamCard";
import teamsJSON from "../../common/teams.json";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Teams.css";
export default function Teams() {
  const navigation = useNavigate();
  const [teams, setTeams] = useState(teamsJSON);
  const [extended, setExtended] = useState(null);
  console.log(teams);

  // Brisanje tima:
  const deleteTeam = (id) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams(filteredTeams);
  };
  return (
    <div>
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          name={team.name}
          matches={team.matches}
          points={team.points}
          deleteTeam={() => deleteTeam(team.id)}
          extended={extended}
          setExtended={setExtended}
          information={team.information}
          id={team.id}
        />
      ))}
      <Link to={"/quotes"}>Vidi citate</Link>
      <button className="btnTeams" onClick={() => navigation("/hotels")}>
        Hotels
      </button>
    </div>
  );
}
