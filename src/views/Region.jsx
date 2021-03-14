import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

const RegionTable = props => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetchRegions();
  }, []);

  const fetchRegions = async () => {
    await fetch(`http://localhost:3000/score/region/2`, {
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
        <h2>Schedule</h2>
        <hr />
        <Table size="md">
          <thead>
            <tr>
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
            </tr>
          </thead>
          <tbody displayRegion={displayRegion}>{displayRegion}</tbody>
        </Table>
      </div>
    </>
  );
};

export default RegionTable;
// import ScheduleTable from './ScoreScheduleTable';

// const RegionTable = props => {
// const [scheduleData, setScheduleData] = useState([]);
// const fetchRegion = (props, scheduleData) => {
//   fetch(`http://localhost:3000/score`, {
//     method: 'GET',
//     headers: new Headers({
//       'Content-Type': 'application/json',
//     }),
//   })
//     .then(response => response.json())
//     .then(data => {
//       scheduleData(data);
//       console.log(data);
//     })
//     .catch(error => console.error(error));
// };

// const displayRegion = () => {
//   return this.data.map(data => {
//     return (
//       <tr>
//         <td>{data.date}</td>
//         <td>{data.time}</td>
//         <td>{data.tvStation}</td>
//         <td>{data.region}</td>
//         <td>{data.round}</td>
//         <td>{data.site}</td>
//         <td>{data.team1}</td>
//         <td>{data.score1}</td>
//         <td>{data.team2}</td>
//         <td>{data.score2}</td>
//       </tr>
//     );
//   });
// };

// const displaySchedule = data.map(scheduleData => {
//   console.log(scheduleData);

// });

//   return (
//     <div>
//       <h2>Schedule</h2>
//       <hr />
//       <Table size="md">
//         <thead>
//           <th>Date</th>
//           <th>Time</th>
//           <th>TV Station</th>
//           <th>Region</th>
//           <th>Round</th>
//           <th>Location</th>
//           <th></th>
//           <th></th>
//           <th></th>
//           <th></th>
//         </thead>
//         <tbody displaySchedule={displaySchedule}>{displaySchedule}</tbody>
//       </Table>
//     </div>
//   );
// };
