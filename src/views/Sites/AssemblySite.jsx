import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import APIURL from '../../helpers/environment';

const AssemblySiteTable = props => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetchRegions();
  }, []);

  const fetchRegions = async () => {
    await fetch(
      `https://tourney2021-server.herokuapp.com/score/site/Simon Skjodt Assembly Hall`,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      }
    )
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
        <td>{data.region}</td>
        <td>{data.round}</td>
        {/* <td>{data.site}</td> */}
        <td
          style={
            data.score1 > data.score2
              ? { backgroundColor: 'gold', color: 'darkblue' }
              : null
          }
        >
          {data.team1}
        </td>
        <td
          style={
            data.score1 > data.score2
              ? { backgroundColor: 'gold', color: 'darkblue' }
              : null
          }
        >
          {data.score1}
        </td>
        <td
          style={
            data.score2 > data.score1
              ? { backgroundColor: 'gold', color: 'darkblue' }
              : null
          }
        >
          {data.team2}
        </td>
        <td
          style={
            data.score > data.score1
              ? { backgroundColor: 'gold', color: 'darkblue' }
              : null
          }
        >
          {data.score2}
        </td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Simon Skjodt Assembly Hall</h1>
        <h5 style={{ textAlign: 'center' }}>Location: Bloomington, Indiana</h5>
        <h5 style={{ textAlign: 'center' }}>
          Home of: Indiana Univeristy Basketball{' '}
        </h5>
        <h5 style={{ textAlign: 'center' }}>Host: Indiana University</h5>
        <h5 style={{ textAlign: 'center' }}>Capacity: 17,222</h5>
        {/* <hr /> */}
        <Table size="md">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>TV Station</th>
              <th>Region</th>
              <th>Round</th>
              {/* <th>Location</th> */}
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

export default AssemblySiteTable;
