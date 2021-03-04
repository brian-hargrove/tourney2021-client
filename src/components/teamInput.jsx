import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const TeamInput = props => {
  const [college, setCollege] = useState('');
  const [nickname, setNickname] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [conference, setConference] = useState('');
  const [colors, setColors] = useState('');
  const [headCoach, setHeadCoach] = useState('');
  const [overallWins, setOverallWins] = useState('');
  const [overallLoss, setoverallLoss] = useState('');
  const [confWins, setConfWins] = useState('');
  const [confLoss, setConfLoss] = useState('');
  const [bid, setBid] = useState('');
  const [totalApp, setTotalApp] = useState('');
  const [lastApp, setLastApp] = useState('');
  const [ncaaWin, setNcaaWin] = useState('');
  const [ncaaLoss, setNcaaLoss] = useState('');
  const [bestFinish, setBestFinish] = useState('');
  const [region, setRegion] = useState('');
  const [seed, setSeed] = useState('');
  const [seedWin, setSeedWin] = useState('');
  const [seedLoss, setSeedLoss] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [scheduleLink, setScheduleLink] = useState('');
  const [rosterLink, setRosterLink] = useState('');
  const [statLink, setStatLink] = useState('');
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [logoLink, setLogoLink] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    fetch('http://localhost:3000/team/create', {
      method: 'POST',
      body: JSON.stringify({
        team: {
          college: college,
          nickname: nickname,
          city: city,
          state: state,
          conference: conference,
          colors: colors,
          headCoach: headCoach,
          overallWins: overallWins,
          overallLoss: overallLoss,
          confWins: confWins,
          confLoss: confLoss,
          bid: bid,
          totalApp: totalApp,
          lastApp: lastApp,
          ncaaWin: ncaaWin,
          ncaaLoss: ncaaLoss,
          bestFinish: bestFinish,
          region: region,
          seed: seed,
          seedWin: seedWin,
          seedLoss: seedLoss,
          websiteLink: websiteLink,
          scheduleLink: scheduleLink,
          rosterLink: rosterLink,
          statLink: statLink,
          color1: color1,
          color2: color2,
          logoLink: logoLink,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCollege('');
        setNickname('');
        setCity('');
        setState('');
        setConference('');
        setColors('');
        setHeadCoach('');
        setOverallWins('');
        setoverallLoss('');
        setConfWins('');
        setConfLoss('');
        setBid('');
        setTotalApp('');
        setLastApp('');
        setNcaaWin('');
        setNcaaLoss('');
        setBestFinish('');
        setRegion('');
        setSeed('');
        setSeedWin('');
        setSeedLoss('');
        setWebsiteLink('');
        setScheduleLink('');
        setRosterLink('');
        setStatLink('');
        setColor1('');
        setColor2('');
        setLogoLink('');
      });
  };

  return (
    <div>
      <Form onSubmit={event => handleSubmit(event)}>
        <FormGroup>
          <Input
            type="text"
            name="college"
            id="formCollege"
            placeholder="college"
            onChange={event => setCollege(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="nickname"
            id="formNickname"
            placeholder="nickname"
            onChange={event => setNickname(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="City"
            id="formCity"
            placeholder="city"
            onChange={event => setCity(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="state"
            id="formState"
            placeholder="State"
            onChange={event => setState(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="conference"
            id="formConference"
            placeholder="Conference"
            onChange={event => setConference(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="colors"
            id="formColors"
            placeholder="Colors"
            onChange={event => setColors(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="headCoach"
            id="formHeadCoach"
            placeholder="Head Coach"
            onChange={event => setHeadCoach(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="overallWins"
            id="formOverallWins"
            placeholder="Overall Wins"
            onChange={event => setOverallWins(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="overallLoss"
            id="formOverallLoss"
            placeholder="Overall Loss"
            onChange={event => setoverallLoss(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="confWins"
            id="formConfWins"
            placeholder="Conference Wins"
            onChange={event => setConfWins(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="confLoss"
            id="formConfLoss"
            placeholder="Conference Losses"
            onChange={event => setConfLoss(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup id="formBid">
          <Input
            type="radio"
            name="bid"
            id="formBidAuto"
            value="Automatic"
            onChange={event => setBid(event.target.value)}
          ></Input>
          <Label htmlFor="formBidAuto">Automatic</Label>
          <Input
            type="radio"
            name="bid"
            id="formBidAtLarge"
            value="At Large"
            onChange={event => setBid(event.target.value)}
          ></Input>
          <Label htmlFor="formBidAtLarge">At Large</Label>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="totalApp"
            id="formTotalApp"
            placeholder="Total Appearances"
            onChange={event => setTotalApp(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="lastApp"
            id="formLastApp"
            placeholder="Last Appearance"
            onChange={event => setLastApp(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="ncaaWin"
            id="formNcaaWin"
            placeholder="NCAA Wins"
            onChange={event => setNcaaWin(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="ncaaLoss"
            id="formNcaaLoss"
            placeholder="NCAA Loss"
            onChange={event => setNcaaLoss(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="bestFinish"
            id="formBestFinish"
            placeholder="Best Finish"
            onChange={event => setBestFinish(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup id="formRegion">
          <Input
            type="radio"
            name="region"
            id="formRegion1"
            value="1"
            onChange={event => setRegion(event.target.value)}
          ></Input>
          <Label htmlFor="formRegion1">Region 1</Label>
          <Input
            type="radio"
            name="region"
            id="formRegion2"
            value="2"
            onChange={event => setRegion(event.target.value)}
          ></Input>
          <Label htmlFor="formRegion1">Region 2</Label>
          <Input
            type="radio"
            name="region"
            id="formRegion3"
            value="3"
            onChange={event => setRegion(event.target.value)}
          ></Input>
          <Label htmlFor="formRegion1">Region 3</Label>
          <Input
            type="radio"
            name="region"
            id="formRegion4"
            value="4"
            onChange={event => setRegion(event.target.value)}
          ></Input>
          <Label htmlFor="formRegion1">Region 4</Label>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="seed"
            id="formSeed"
            placeholder="Seed"
            onChange={event => setSeed(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="seedWin"
            id="formSeedWin"
            placeholder="Seed Wins"
            onChange={event => setSeedWin(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="seedLoss"
            id="formSeedLoss"
            placeholder="Seed Loss"
            onChange={event => setSeedLoss(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="websiteLink"
            id="formWebsiteLink"
            placeholder="Website Link"
            onChange={event => setWebsiteLink(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="scheduleLink"
            id="formScheduleLink"
            placeholder="Schedule Link"
            onChange={event => setScheduleLink(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="rosterLink"
            id="formRosterLink"
            placeholder="Roster Link"
            onChange={event => setRosterLink(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="statLink"
            id="formStatLink"
            placeholder="Stat Link"
            onChange={event => setStatLink(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="color1"
            id="formColor1"
            placeholder="Color 1"
            onChange={event => setColor1(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="color2"
            id="formColor2"
            placeholder="Color 2"
            onChange={event => setColor2(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="logoLink"
            id="formLogoLink"
            placeholder="Logo Link"
            onChange={event => setCollege(event.target.value)}
          ></Input>
        </FormGroup>
        <Button type="submit" id="teamCreateBTN">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TeamInput;
