import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';

const ScheduleEdit = props => {
  const [editDate, setEditDate] = useState(props.scheduleToUpdate.date);
  const [editTime, setEditTime] = useState(props.scheduleToUpdate.time);
  const [editTvStation, setEditTvStation] = useState(
    props.scheduleToUpdate.tvStation
  );
  const [editRegion, setEditRegion] = useState(props.scheduleToUpdate.region);
  const [editRound, setEditRound] = useState(props.scheduleToUpdate.round);
  const [editSite, setEditSite] = useState(props.scheduleToUpdate.site);
  const [editTeam1, setEditTeam1] = useState(props.scheduleToUpdate.team1);
  const [editScore1, setEditScore1] = useState(props.scheduleToUpdate.score1);
  const [editTeam2, setEditTeam2] = useState(props.scheduleToUpdate.team2);
  const [editScore2, setEditScore2] = useState(props.scheduleToUpdate.score2);

  const scheduleUpdate = (event, score) => {
    event.preventDefault();
    fetch(`http://localhost:3000/score/update/${props.scheduleToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        date: editDate,
        time: editTime,
        tvStation: editTvStation,
        region: editRegion,
        round: editRound,
        site: editSite,
        team1: editTeam1,
        score1: editScore1,
        team2: editTeam2,
        score2: editScore2,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(response => {
      props.fetchSchedule();
    });
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Update Schedule</ModalHeader>
      <ModalBody>
        <Form onSubmit={scheduleUpdate}>
          <FormGroup>
            <Label htmlFor="date">Edit Date</Label>
            <Input
              name="date"
              value={editDate}
              onChange={event => setEditDate(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="time">Edit Time</Label>
            <Input
              name="time"
              value={editTime}
              onChange={event => setEditTime(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="tvStation">Edit TV Station</Label>
            <Input
              name="tvStation"
              value={editTvStation}
              onChange={event => setEditTvStation(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="region">Edit Region</Label>
            <Input
              name="region"
              value={editRegion}
              onChange={event => setEditRegion(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="round">Edit Round</Label>
            <Input
              name="round"
              value={editRound}
              onChange={event => setEditRound(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="site">Edit Site</Label>
            <Input
              name="site"
              value={editSite}
              onChange={event => setEditSite(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="team1">Edit Team 1</Label>
            <Input
              name="team1"
              value={editTeam1}
              onChange={event => setEditTeam1(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="score1">Edit Score 1</Label>
            <Input
              name="score1"
              value={editScore1}
              onChange={event => setEditScore1(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="team2">Edit Team 2</Label>
            <Input
              name="team2"
              value={editTeam2}
              onChange={event => setEditTeam2(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="score2">Edit Score 2</Label>
            <Input
              name="score2"
              value={editScore2}
              onChange={event => setEditScore2(event.target.value)}
            />
          </FormGroup>
          <Button type="submit">Update Schedule</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ScheduleEdit;
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
