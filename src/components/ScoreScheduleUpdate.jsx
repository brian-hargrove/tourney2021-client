import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
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
    fetch(
      `${process.env.REACT_APP_URL}/score/update/${props.scheduleToUpdate.id}`,
      {
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
      }
    ).then(response => {
      props.fetchSchedule();
      props.updateOff();
      alert('Score updated');
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
