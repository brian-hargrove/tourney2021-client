import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import DateDropdown from '../../components/DateDropdown';
import APIURL from '../../helpers/environment';

const March21 = props => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetchDates();
  }, []);

  const fetchDates = async () => {
    await fetch(
      `https://tourney2021-server.herokuapp.com/score/date/2021-03-21`,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      }
    )
      .then(response => response.json())
      .then(data => {
        setDates(data);
        console.log(data);
      });
  };

  const displayDate = dates.map(data => {
    return (
      <tr>
        {/* <td>{data.date}</td> */}
        <td>{data.time}</td>
        <td>{data.tvStation}</td>
        <td>{data.region}</td>
        <td>{data.round}</td>
        <td>{data.site}</td>
        <td>{data.team1}</td>
        <td>{data.score1}</td>
        <td>{data.team2}</td>
        <td>{data.score2}</td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>
          SUNDAY, MARCH 21st <DateDropdown />
        </h1>
        <Table size="md">
          <thead>
            <tr>
              {/* <th>Date</th> */}
              <th>Time</th>
              <th>TV Station</th>
              <th>Region</th>
              <th>Round</th>
              <th>Location</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody displayDate={displayDate}>{displayDate}</tbody>
        </Table>
      </div>
    </>
  );
};

export default March21;
