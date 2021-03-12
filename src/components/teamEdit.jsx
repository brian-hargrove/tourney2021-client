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

const TeamEdit = props => {
  const [editCollege, setEditCollege] = useState(props.teamToUpdate.college);
  const [editNickname, setEditNickname] = useState(props.teamToUpdate.nickname);
  const [editCity, setEditCity] = useState(props.teamToUpdate.city);
  const [editState, setEditState] = useState(props.teamToUpdate.state);
  const [editConference, setEditConference] = useState(
    props.teamToUpdate.conference
  );
  const [editColors, setEditColors] = useState(props.teamToUpdate.colors);
  const [editHeadCoach, setEditHeadCoach] = useState(
    props.teamToUpdate.headCoach
  );
  const [editOverallWins, setEditOverallWins] = useState(
    props.teamToUpdate.overallWins
  );
  const [editOverallLoss, setEditOverallLoss] = useState(
    props.teamToUpdate.overallLoss
  );
  const [editConfWins, setEditConfWins] = useState(props.teamToUpdate.confWins);
  const [editConfLoss, setEditConfLoss] = useState(props.teamToUpdate.confLoss);
  const [editBid, setEditBid] = useState(props.teamToUpdate.bid);
  const [editTotalApp, setEditTotalApp] = useState(props.teamToUpdate.totalApp);
  const [editLastApp, setEditLastApp] = useState(props.teamToUpdate.lastApp);
  const [editNcaaWin, setEditNcaaWin] = useState(props.teamToUpdate.ncaaWin);
  const [editNcaaLoss, setEditNcaaLoss] = useState(props.teamToUpdate.ncaaLoss);
  const [editBestFinish, setEditBestFinish] = useState(
    props.teamToUpdate.bestFinish
  );
  const [editRegion, setEditRegion] = useState(props.teamToUpdate.region);
  const [editSeed, setEditSeed] = useState(props.teamToUpdate.seed);
  const [editSeedWin, setEditSeedWin] = useState(props.teamToUpdate.seedWin);
  const [editSeedLoss, setEditSeedLoss] = useState(props.teamToUpdate.seedLoss);
  const [editWebsiteLink, setEditWebsiteLink] = useState(
    props.teamToUpdate.websiteLink
  );
  const [editScheduleLink, setEditScheduleLink] = useState(
    props.teamToUpdate.scheduleLink
  );
  const [editRosterLink, setEditRosterLink] = useState(
    props.teamToUpdate.rosterLink
  );
  const [editStatLink, setEditStatLink] = useState(props.teamToUpdate.statLink);
  const [editColor1, setEditColor1] = useState(props.teamToUpdate.color1);
  const [editColor2, setEditColor2] = useState(props.teamToUpdate.color2);
  const [editLogoLink, setEditLogoLink] = useState(props.teamToUpdate.logoLink);

  const teamUpdate = (event, team) => {
    event.preventDefault();

    fetch(`http://localhost:3000/team/update/${props.teamToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        college: editCollege,
        nickname: editNickname,
        city: editCity,
        state: editState,
        conference: editConference,
        colors: editColors,
        headCoach: editHeadCoach,
        overallWins: editOverallWins,
        overallLoss: editOverallLoss,
        confWins: editConfWins,
        confLoss: editConfLoss,
        bid: editBid,
        totalApp: editTotalApp,
        lastApp: editLastApp,
        ncaaWin: editNcaaWin,
        ncaaLoss: editNcaaLoss,
        bestFinish: editBestFinish,
        region: editRegion,
        seed: editSeed,
        seedWin: editSeedWin,
        seedLoss: editSeedLoss,
        websiteLink: editWebsiteLink,
        scheduleLink: editScheduleLink,
        roster: editRosterLink,
        statLink: editStatLink,
        color1: editColor1,
        color2: editColor2,
        logoLink: editLogoLink,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(response => {
      props.fetchTeam();
      props.updateOff();
      alert('Team Info Updated');
    });
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Update Team Information</ModalHeader>
      <ModalBody>
        <Form onSubmit={teamUpdate}>
          <FormGroup>
            <Label htmlFor="college">College</Label>
            <Input
              name="college"
              value={editCollege}
              onChange={event => setEditCollege(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="nickname">Nickname</Label>
            <Input
              name="nickname"
              value={editNickname}
              onChange={event => setEditNickname(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="city">City</Label>
            <Input
              name="city"
              value={editCity}
              onChange={event => setEditCity(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="state">State</Label>
            <Input
              name="state"
              value={editState}
              onChange={event => setEditState(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="conference">Conference</Label>
            <Input
              name="conference"
              value={editConference}
              onChange={event => setEditConference(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="colors">Colors</Label>
            <Input
              name="colors"
              value={editColors}
              onChange={event => setEditColors(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="headCoach">Head Coach</Label>
            <Input
              name="headCoach"
              value={editHeadCoach}
              onChange={event => setEditHeadCoach(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="overallWins">Overall Wins</Label>
            <Input
              name="overallWins"
              value={editOverallWins}
              onChange={event => setEditOverallWins(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="overallLoss">Overall Loss</Label>
            <Input
              name="overallLoss"
              value={editOverallLoss}
              onChange={event => setEditOverallLoss(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confWins">Conference Wins</Label>
            <Input
              name="confWins"
              value={editConfWins}
              onChange={event => setEditConfWins(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confLoss">Conference Loss</Label>
            <Input
              name="confLoss"
              value={editConfLoss}
              onChange={event => setEditConfLoss(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bid">Bid</Label>
            <Input
              name="bid"
              value={editBid}
              onChange={event => setEditBid(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="totalApp">Total Appearances</Label>
            <Input
              name="totalApp"
              value={editTotalApp}
              onChange={event => setEditTotalApp(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastApp">Last Appearance</Label>
            <Input
              name="lastApp"
              value={editLastApp}
              onChange={event => setEditLastApp(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="ncaaWin">NCAA Wins</Label>
            <Input
              name="ncaaWin"
              value={editNcaaWin}
              onChange={event => setEditNcaaWin(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="ncaaLoss">NCAA Loss</Label>
            <Input
              name="ncaaLoss"
              value={editNcaaLoss}
              onChange={event => setEditNcaaLoss(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bestFinish">Best Finish</Label>
            <Input
              name="bestFinish"
              value={editBestFinish}
              onChange={event => setEditBestFinish(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="region">Region</Label>
            <Input
              name="region"
              value={editRegion}
              onChange={event => setEditRegion(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="seed">Seed</Label>
            <Input
              name="seed"
              value={editSeed}
              onChange={event => setEditSeed(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="seedWin">Seed Wins</Label>
            <Input
              name="seedWin"
              value={editSeedWin}
              onChange={event => setEditSeedWin(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="seedLoss">Seed Losses</Label>
            <Input
              name="seedLoss"
              value={editSeedLoss}
              onChange={event => setEditSeedLoss(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="websiteLink">Website Link</Label>
            <Input
              name="websiteLink"
              value={editWebsiteLink}
              onChange={event => setEditWebsiteLink(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="scheduleLink">Schedule Link</Label>
            <Input
              name="scheduleLink"
              value={editScheduleLink}
              onChange={event => setEditScheduleLink(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rosterLink">Roster Link</Label>
            <Input
              name="rosterLink"
              value={editRosterLink}
              onChange={event => setEditRosterLink(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="statLink">Stat Link</Label>
            <Input
              name="statLink"
              value={editStatLink}
              onChange={event => setEditStatLink(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="color1">Color 1</Label>
            <Input
              name="color1"
              value={editColor1}
              onChange={event => setEditColor1(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="color2">Color 2</Label>
            <Input
              name="color2"
              value={editColor2}
              onChange={event => setEditColor2(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="logoLink">Logo Link</Label>
            <Input
              name="logoLink"
              value={editLogoLink}
              onChange={event => setEditLogoLink(event.target.value)}
            />
          </FormGroup>
          <Button type="submit">Update Team Info</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default TeamEdit;
