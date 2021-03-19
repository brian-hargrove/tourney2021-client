import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import '../styles/Team.css';

const CollegeCards = props => {
  const displaySchoolCards = props.schools.map((schoolInfo, index) => {
    console.log(schoolInfo);
    return (
      <Card
        style={{
          color: `${schoolInfo.color2}`,
          backgroundColor: `${schoolInfo.color1}`,
        }}
        key={schoolInfo.id}
      >
        <CardBody className="teamCardBody">
          <CardTitle className="teamCardTitle">
            <h2>{schoolInfo.college}</h2>
          </CardTitle>
          <CardSubtitle className="teamCardSubtitle">
            <h4>{schoolInfo.nickname}</h4>
          </CardSubtitle>
          <hr />
          <CardSubtitle className="teamCardSubtitle">
            <h5>
              Region: {schoolInfo.region}, Seed: {schoolInfo.seed}
            </h5>
          </CardSubtitle>
          <CardSubtitle className="teamCardSubtitle">
            <h5>Bid: {schoolInfo.bid}</h5>
          </CardSubtitle>
          <hr />
          <CardSubtitle className="teamCardSubtitle">
            <h5>
              Overall Record {schoolInfo.overallWins} - {schoolInfo.overallLoss}
            </h5>
            <hr />
            <CardSubtitle className="teamCardSubtitle">
              <h5>{schoolInfo.conference}</h5>
            </CardSubtitle>
            <h5>
              Conference Record {schoolInfo.confWins} - {schoolInfo.confLoss}
            </h5>
          </CardSubtitle>
          <Button
            color="light"
            onClick={() => {
              props.getMoreInfo(schoolInfo);
              props.moreInfoOn();
            }}
          >
            More Info
          </Button>
        </CardBody>
      </Card>
    );
  });

  return (
    <>
      <h1>2021 NCAA Tournament Teams</h1>

      <div displaySchoolCards={displaySchoolCards} className="teamGrid">
        {displaySchoolCards}
      </div>
    </>
  );
};

export default CollegeCards;
