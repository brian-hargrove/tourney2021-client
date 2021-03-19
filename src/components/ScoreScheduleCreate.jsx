import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import APIURL from '../helpers/environment';

const ScheduleCreate = props => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tvStation, setTvStation] = useState('');
  const [region, setRegion] = useState('');
  const [round, setRound] = useState('');
  const [site, setSite] = useState('');
  const [team1, setTeam1] = useState('');
  const [score1, setScore1] = useState('');
  const [team2, setTeam2] = useState('');
  const [score2, setScore2] = useState('');

  const resetForm = () => {
    setDate();
    setTime();
    setTvStation();
    setRegion();
    setRound();
    setSite();
    setTeam1();
    setScore1();
    setTeam2();
    setScore2();
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch(`https://tourney2021-server.herokuapp.com/score/create`, {
      method: 'POST',
      body: JSON.stringify({
        score: {
          date: date,
          time: time,
          tvStation: tvStation,
          region: region,
          round: round,
          site: site,
          team1: team1,
          score1: score1,
          team2: team2,
          score2: score2,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        resetForm();
        props.fetchSchedule();
        alert('Schedule info entered');
      });
  };

  return (
    <div>
      <Form onSubmit={event => handleSubmit(event)}>
        <FormGroup>
          <Input
            type="date"
            name="date"
            id="createDate"
            placeholder="Date"
            onChange={event => setDate(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="time"
            id="createTime"
            placeholder="Time"
            onChange={event => setTime(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="tvStation"
            id="createTvStation"
            placeholder="TV Station"
            onChange={event => setTvStation(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="region"
            id="createRegion"
            placeholder="Region"
            onChange={event => setRegion(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="round"
            id="createRound"
            placeholder="Round"
            onChange={event => setRound(event.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup className="formSite">
          <Input
            type="radio"
            name="site"
            value="Bankers Life Fieldhouse"
            onChange={event => setSite(event.target.value)}
          ></Input>
          <Label
            htmlFor="formSiteBankers"
            className="formSite"
            id="formSiteBankers"
          >
            Bankers Life Fieldhouse
          </Label>
        </FormGroup>

        <FormGroup className="formSite">
          <Input
            type="radio"
            name="site"
            value="Hinkle Fieldhouse"
            onChange={event => setSite(event.target.value)}
          ></Input>
          <Label
            id="formSiteHinkle"
            htmlFor="formSite"
            className="formSiteHinkle"
          >
            Hinkle Fieldhouse
          </Label>
        </FormGroup>
        <FormGroup className="formSite">
          <Input
            type="radio"
            name="site"
            value="Indiana Farmers Coliseum"
            onChange={event => setSite(event.target.value)}
          ></Input>
          <Label
            htmlFor="formSiteFarmers"
            className="formSite"
            id="formSiteFarmers"
          >
            Indiana Farmers Coliseum
          </Label>
        </FormGroup>
        <FormGroup className="formSite">
          <Input
            type="radio"
            name="site"
            value="Lucas Oil Stadium"
            onChange={event => setSite(event.target.value)}
          ></Input>
          <Label
            htmlFor="formSiteLucas"
            className="formSite"
            id="formSiteLucas"
          >
            Lucas Oil Stadium
          </Label>
        </FormGroup>

        <FormGroup className="formSite">
          <Input
            type="radio"
            name="site"
            value="Mackey Arena"
            onChange={event => setSite(event.target.value)}
          ></Input>
          <Label
            htmlFor="formSiteMackey"
            className="formSite"
            id="formSiteMackey"
          >
            Mackey Arena
          </Label>
        </FormGroup>

        <FormGroup className="formSite">
          <Input
            type="radio"
            name="site"
            value="Simon Skjodt Assembly Hall"
            onChange={event => setSite(event.target.value)}
          ></Input>
          <Label
            htmlFor="formSiteAssembly"
            className="formSite"
            id="formSiteAssembly"
          >
            Simon Skjodt Assembly Hall
          </Label>
        </FormGroup>

        {/* <FormGroup>
          <Input
            type="text"
            name="site"
            id="createSite"
            placeholder="Site/Arena"
            onChange={event => setSite(event.target.value)}
          ></Input>
        </FormGroup> */}
        <FormGroup>
          <Input
            type="text"
            name="team1"
            id="createTeam1"
            placeholder="Team 1"
            onChange={event => setTeam1(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="score1"
            id="createScore1"
            placeholder="Score 1"
            onChange={event => setScore1(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="team2"
            id="createTeam2"
            placeholder="Team 2"
            onChange={event => setTeam2(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="score2"
            id="createScore2"
            placeholder="Score 2"
            onChange={event => setScore2(event.target.value)}
          ></Input>
        </FormGroup>
        <Button type="submit" id="scoreCreateBTN">
          Submit
        </Button>
        <Button type="reset" id="resetButton">
          Reset Form
        </Button>
      </Form>
    </div>
  );
};

export default ScheduleCreate;
