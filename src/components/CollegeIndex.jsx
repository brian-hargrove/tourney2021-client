import React, { useState, useEffect } from 'react';
import { Col, Container } from 'reactstrap';
import CollegeCards from './CollegeCards';
import CollegeMoreInfo from './CollegeMoreInfo';
import APIURL from '../helpers/environment';

const CollegeIndex = props => {
  const [schools, setSchools] = useState([]);
  const [infoActive, setInfoActive] = useState(false);
  const [moreTeamInfo, setMoreTeamInfo] = useState([]);

  const fetchColleges = () => {
    fetch(`${APIURL}/team`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(collegeData => setSchools(collegeData))
      .catch(error => console.log(error));
  };

  const getMoreInfo = team => {
    setMoreTeamInfo(team);
  };

  const moreInfoOn = () => {
    setInfoActive(true);
  };

  const moreInfoOff = () => {
    setInfoActive(false);
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  return (
    <Container>
      <Col>
        <CollegeCards
          schools={schools}
          getMoreInfo={getMoreInfo}
          moreInfoOn={moreInfoOn}
          fetchColleges={fetchColleges}
        />
      </Col>
      {infoActive ? (
        <CollegeMoreInfo
          moreTeamInfo={moreTeamInfo}
          moreInfoOff={moreInfoOff}
          fetchColleges={fetchColleges}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default CollegeIndex;
