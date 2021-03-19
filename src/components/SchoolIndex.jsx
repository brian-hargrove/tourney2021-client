import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import SchoolInfo from './SchoolInfo';
import TeamLineup from './SchoolTable';
import APIURL from '../helpers/environment';

const SchoolIndex = props => {
  const [schoolInfo, setSchoolInfo] = useState([]);
  const [getInfoOn, setGetInfoOn] = useState(false);
  const [collegeInfo, setCollegeInfo] = useState([]);

  const fetchSchoolInfo = async () => {
    await fetch(`https://tourney2021-server.herokuapp.com/team/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(schInfo => {
        setSchoolInfo(schInfo);
        console.log('school info:', schInfo);
      });
  };

  const getSchoolInfo = info => {
    setCollegeInfo(info);
  };

  const infoOn = () => {
    setGetInfoOn(true);
  };

  const infoOff = () => {
    setGetInfoOn(false);
  };
  useEffect(() => {
    fetchSchoolInfo();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="9">
          <TeamLineup
            schoolInfo={schoolInfo}
            getSchoolInfo={getSchoolInfo}
            infoOn={infoOn}
            fetchSchoolInfo={fetchSchoolInfo}
          />
        </Col>
        {getInfoOn ? (
          <SchoolInfo
            infoOff={infoOff}
            fetchSchoolInfo={fetchSchoolInfo}
            collegeInfo={collegeInfo}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default SchoolIndex;
