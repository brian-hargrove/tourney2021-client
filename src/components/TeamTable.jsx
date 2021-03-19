import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

const TeamTable = props => {
  const deleteTeam = team => {
    fetch(`${APIURL}/team/delete/${team.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(() => props.fetchTeam());
  };

  const teamMapper = () => {
    return props.teams.map((team, index) => {
      return (
        <tr key={index}>
          <th scope="row">{team.id}</th>
          <td>{team.college}</td>
          <td>{team.nickname}</td>
          <td>{team.city}</td>
          <td>{team.state}</td>
          <td>{team.conference}</td>
          <td>{team.colors}</td>
          <td>{team.headCoach}</td>
          <td>{team.overallWins}</td>
          <td>{team.overallLoss}</td>
          <td>{team.confWins}</td>
          <td>{team.confLoss}</td>
          <td>{team.bid}</td>
          <td>{team.totalApp}</td>
          <td>{team.lastApp}</td>
          <td>{team.ncaaWin}</td>
          <td>{team.ncaaLoss}</td>
          <td>{team.bestFinish}</td>
          <td>{team.region}</td>
          <td>{team.seed}</td>
          <td>{team.seedWin}</td>
          <td>{team.seedLoss}</td>
          <td>{team.websiteLink}</td>
          <td>{team.scheduleLink}</td>
          <td>{team.rosterLink}</td>
          <td>{team.statLink}</td>
          <td>{team.color1}</td>
          <td>{team.color2}</td>
          <td>{team.logoLink}</td>
          <td>
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateTeam(team);
                props.updateOn();
              }}
            >
              Update
            </Button>
          </td>
          <td>
            <Button
              color="danger"
              onClick={() => {
                deleteTeam(team);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h2>Team Info</h2>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>College</th>
            <th>Nickname</th>
            <th>City</th>
            <th>State</th>
            <th>Conference</th>
            <th>Colors</th>
            <th>Head Coach</th>
            <th>OW</th>
            <th>OL</th>
            <th>CW</th>
            <th>CL</th>
            <th>Bid</th>
            <th>Total App</th>
            <th>Last App</th>
            <th>NCAA Win</th>
            <th>NCAA Loss</th>
            <th>Best Finish</th>
            <th>Region</th>
            <th>Seed</th>
            <th>Seed Win</th>
            <th>Seed Loss</th>
            <th>Website</th>
            <th>Schedule</th>
            <th>Roster</th>
            <th>Stat</th>
            <th>Color 1</th>
            <th>Color 2</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>{teamMapper()}</tbody>
      </Table>
    </div>
  );
};

export default TeamTable;
