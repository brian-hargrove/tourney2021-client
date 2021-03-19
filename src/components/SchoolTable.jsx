import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import '../styles/Team.css';
import APIURL from '../helpers/environment';

const TeamLineup = props => {
  const [school, setSchool] = useState([]);
  const [college, setCollege] = useState([]);

  const fetchTeams = async () => {
    await fetch(`${process.env.REACT_APP_URL}/team/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(schoolInfo => {
        setSchool(schoolInfo);
        console.log(schoolInfo);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchTeams();
    // handleClick();
  }, []);

  const handleClick = async event => {
    event.preventDefault();

    await fetch(`${APIURL}/team/school/${school.college}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(college => setCollege(college));
    // }
    // );
    console.log('college', college).catch(error => console.log(error));
  };

  const displaySchoolCards = school.map(schoolInfo => {
    console.log(schoolInfo);
    return (
      <Card
        style={{
          //   width: '18rem',
          color: `${schoolInfo.color2}`,
          backgroundColor: `${schoolInfo.color1}`,
        }}
        key={schoolInfo.id}
      >
        <CardBody className="teamCardBody">
          <CardTitle className="teamCardTitle">
            <h2>{schoolInfo.college}</h2>
          </CardTitle>
          <CardSubtitle className="teamCardSubtitle">
            <h4>{schoolInfo.nickname}</h4>
          </CardSubtitle>
          <CardSubtitle className="teamCardSubtitle">
            <h5>{schoolInfo.conference}</h5>
          </CardSubtitle>
          <CardSubtitle className="teamCardSubtitle">
            <h5>
              Region: {schoolInfo.region}, Seed: {schoolInfo.seed}
            </h5>
          </CardSubtitle>
          <CardSubtitle className="teamCardSubtitle">
            <h5>
              Record {schoolInfo.overallWins} - {schoolInfo.overallLoss}
            </h5>
          </CardSubtitle>
          <Button
            color="light"
            onClick={event => {
              handleClick();
            }}
          >
            More Info
          </Button>
        </CardBody>
      </Card>
    );
  });

  return (
    <>
      <h1>2021 NCAA Tournament Teams</h1>

      <div displaySchoolCards={displaySchoolCards} className="teamGrid">
        {displaySchoolCards}
      </div>
    </>
  );
};

export default TeamLineup;
