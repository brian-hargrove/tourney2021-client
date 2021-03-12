import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardImgOverlay,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';
import '../styles/Team.css';

const TeamLineup = () => {
  const [school, setSchool] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    await fetch(`http://localhost:3000/team/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(schoolData => {
        setSchool(schoolData);
        console.log(schoolData);
      })
      .catch(error => console.error(error));
  };

  const displaySchoolCards = school.map(schoolData => {
    console.log(schoolData);
    return (
      <Card
        style={{
          width: '18rem',
          color: `${schoolData.color2}`,
          backgroundColor: `${schoolData.color1}`,
        }}
        key={schoolData.id}
      >
        <CardBody className="teamCardBody">
          <CardTitle className="teamCardTitle">
            <h2>{schoolData.college}</h2>
          </CardTitle>
          <CardSubtitle className="teamCardSubtitle">
            <h4>{schoolData.nickname}</h4>
          </CardSubtitle>
          <CardSubtitle className="teamCardSubtitle">
            <h4>{schoolData.conference}</h4>
          </CardSubtitle>
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
