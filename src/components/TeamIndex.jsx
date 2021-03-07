import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TeamInput from './teamInput';
import TeamTable from './TeamTable';
import TeamEdit from './teamEdit';

const TeamIndex = props => {
  const [teams, setTeams] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [teamToUpdate, setTeamToUpdate] = useState([]);

  const fetchTeam = () => {
    fetch(`http://localhost:3000/team`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(teamData => {
        setTeams(teamData);
        console.log(teamData);
      })
      .catch(error => console.log(error));
  };

  const editUpdateTeam = team => {
    setTeamToUpdate(team);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="3">
          <TeamInput fetchTeam={fetchTeam} />
        </Col>
        <Col sm="9">
          <TeamTable
            teams={teams}
            editUpdateTeam={editUpdateTeam}
            updateOn={updateOn}
            fetchTeam={fetchTeam}
          />
        </Col>
        {updateActive ? (
          <TeamEdit
            teamToUpdate={teamToUpdate}
            updateOff={updateOff}
            fetchTeam={fetchTeam}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default TeamIndex;
