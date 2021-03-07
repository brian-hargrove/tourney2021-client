import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScheduleCreate from './ScoreScheduleCreate';
import ScheduleTable from './ScoreScheduleTable';
import ScheduleEdit from './ScoreScheduleUpdate';

const ScheduleIndex = props => {
  const [scores, setScores] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [scheduleToUpdate, setScheduleToUpdate] = useState([]);

  const fetchSchedule = () => {
    fetch(`http://localhost:3000/score/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(schData => {
        setScores(schData);
        console.log(schData);
      });
  };

  const editUpdateSchedule = score => {
    setScheduleToUpdate(score);
  };
  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchSchedule();
  }, []);
  return (
    <Container>
      <Row>
        <Col md="3">
          <ScheduleCreate fetchSchedule={fetchSchedule} />
        </Col>
        <Col md="9">
          <ScheduleTable
            scores={scores}
            editUpdateSchedule={editUpdateSchedule}
            updateOn={updateOn}
            fetchSchedule={fetchSchedule}
          />
        </Col>
        {updateActive ? (
          <ScheduleEdit
            scheduleToUpdate={scheduleToUpdate}
            updateOff={updateOff}
            fetchSchedule={fetchSchedule}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default ScheduleIndex;
