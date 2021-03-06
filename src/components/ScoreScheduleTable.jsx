import React from 'react';
import { Table, Button } from 'reactstrap';

const ScheduleTable = props => {
  const deleteSchedule = score => {
    fetch(`http://localhost:3000/score/delete/${score.id}`, {
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
          <th scope="row">{score.id}</th>
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
            <th>#</th>
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
// import React, { useState } from 'react';
// import { Button, Table } from 'reactstrap';

// const ScheduleUpdate = props => {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [tvStation, setTvStation] = useState('');
//   const [region, setRegion] = useState('');
//   const [round, setRound] = useState('');
//   const [site, setSite] = useState('');
//   const [team1, setTeam1] = useState('');
//   const [score1, setScore1] = useState('');
//   const [team2, setTeam2] = useState('');
//   const [score2, setScore2] = useState('');
//   const [schedule, setSchedule] = useState([]);
//   const [scores, setScores] = useState([]);

//   const fetchSchedule = () => {
//     fetch('http://localhost:3000/score/', {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//       }),
//     })
//       .then(response => response.json())
//       .then(body => {
//         setScores({ scores: body });
//       })

//       .catch(error => console.error(error));
//   };

//   const displaySchedule = () => {
//     console.log(scores);
//     return scores.map(scores => {
//       return (
//         <tr>
//           <td>date</td>
//           <td>2</td>
//           <td>3</td>
//           <td>4</td>
//           <td>5</td>
//           <td>6</td>
//           <td>7</td>
//           <td>8</td>
//           <td>9</td>
//           <td>10</td>
//           <td>
//             <Button>Update</Button>
//           </td>
//           <td>
//             <Button>Delete</Button>
//           </td>
//         </tr>
//       );
//     });
//   };

//   return (
//     <div>
//       <Table striped>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Time</th>
//             <th>TV Station</th>
//             <th>Region</th>
//             <th>Round</th>
//             <th>Site</th>
//             <th>Team 1</th>
//             <th>Score 1</th>
//             <th>Team 2</th>
//             <th>Score 2</th>
//             <th>Update</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>{setScores ? displaySchedule() : fetchSchedule()}</tbody>
//       </Table>
//     </div>
//   );
// };

// export default ScheduleUpdate;
