import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import APIURL from '../../helpers/environment';

const RegionWestTable = props => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetchRegions();
  }, []);

  const fetchRegions = async () => {
    await fetch(`https://tourney2021-server.herokuapp.com/score/region/West`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(data => {
        setRegions(data);
        console.log(data);
      });
  };

  const displayRegion = regions.map(data => {
    return (
      <tr>
        <td>{data.date}</td>
        <td>{data.time}</td>
        <td>{data.tvStation}</td>
        {/* <td>{data.region}</td> */}
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
        <h1 style={{ textAlign: 'center' }}>West Region Schedule</h1>
        <Table size="md">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>TV Station</th>
              {/* <th>Region</th> */}
              <th>Round</th>
              <th>Location</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody displayRegion={displayRegion}>{displayRegion}</tbody>
        </Table>
      </div>
    </>
  );
};

export default RegionWestTable;
