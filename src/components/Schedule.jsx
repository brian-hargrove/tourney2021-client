import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

// import RegionDropdown from '../components/RegionDropdown';

// import ScheduleTable from './ScoreScheduleTable';

const ScoreTable = props => {
  const [scheduleData, setScheduleData] = useState([]);

  const fetchSchedule = async () => {
    await fetch(`${process.env.REACT_APP_URL}/score/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(scheduleData => {
        setScheduleData(scheduleData);
        console.log(scheduleData);
      })
      .catch(error => console.error(error));
  };
  useEffect(() => {
    fetchSchedule();
  }, []);

  const displaySchedule = scheduleData.map(scheduleData => {
    console.log(scheduleData);

    return (
      <tr>
        <td>{scheduleData.date}</td>
        <td>{scheduleData.time}</td>
        <td>{scheduleData.region}</td>
        <td>{scheduleData.round}</td>
        <td>{scheduleData.site}</td>
        <td>{scheduleData.team1}</td>
        <td>{scheduleData.score1}</td>
        <td>{scheduleData.team2}</td>
        <td>{scheduleData.score2}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Schedule</h2>
      <hr />
      {/* <RegionDropdown /> */}
      <Table size="md">
        <thead>
          <th>Date</th>
          <th>Time</th>
          <th>TV Station</th>
          <th>Region</th>
          <th>Round</th>
          <th>Location</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody displaySchedule={displaySchedule}>{displaySchedule}</tbody>
      </Table>
    </div>
  );
};
export default ScoreTable;
