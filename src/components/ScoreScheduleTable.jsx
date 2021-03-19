import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

const ScheduleTable = props => {
  const deleteSchedule = score => {
    fetch(`${APIURL}/score/delete/${score.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': ' application/json',
      }),
    }).then(() => props.fetchSchedule());
  };

  const scheduleMapper = () => {
    return props.scores.map((score, index) => {
      return (
        <tr key={index}>
          {/* <th scope="row">{score.id}</th> */}
          <td>{score.date}</td>
          <td>{score.time}</td>
          <td>{score.tvStation}</td>
          <td>{score.region}</td>
          <td>{score.round}</td>
          <td>{score.site}</td>
          <td>{score.team1}</td>
          <td>{score.score1}</td>
          <td>{score.team2}</td>
          <td>{score.score2}</td>
          <td>
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateSchedule(score);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteSchedule(score);
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
      <h2>Schedule</h2>
      <hr />
      <Table striped>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Date</th>
            <th>Time</th>
            <th>TV Station</th>
            <th>Region</th>
            <th>Round</th>
            <th>Site</th>
            <th>Team 1</th>
            <th>Score 1</th>
            <th>Team 2</th>
            <th>Score 2</th>
          </tr>
        </thead>
        <tbody>{scheduleMapper()}</tbody>
      </Table>
    </div>
  );
};

export default ScheduleTable;
