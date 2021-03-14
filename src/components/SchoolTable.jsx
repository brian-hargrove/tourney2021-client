import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import '../styles/Team.css';

const TeamLineup = props => {
  // const [college, setCollege] = useState([]);
  // const fetchOneCollege = props => {
  //   fetch(`http://localhost:3000/team/school/`, {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(collegeData => setCollege());
  // };

  //   const displaySchoolCards = () => {
  //     return props.schoolInfo.map((schoolInfo, index) => {
  //       return (
  //         <div>
  //           <Card
  //             key={index}
  //             style={{
  //               //   width: '18rem',
  //               color: `${schoolInfo.color2}`,
  //               backgroundColor: `${schoolInfo.color1}`,
  //             }}
  //           >
  //             <CardBody className="teamCardBody">
  //               <CardTitle className="teamCardTitle">
  //                 <h2>{schoolInfo.college}</h2>
  //               </CardTitle>
  //               <CardSubtitle className="teamCardSubtitle">
  //                 <h4>{schoolInfo.nickname}</h4>
  //               </CardSubtitle>
  //               <CardSubtitle className="teamCardSubtitle">
  //                 <h5>{schoolInfo.conference}</h5>
  //               </CardSubtitle>
  //               <CardSubtitle className="teamCardSubtitle">
  //                 <h5>
  //                   Region: {schoolInfo.region}, Seed: {schoolInfo.seed}
  //                 </h5>
  //               </CardSubtitle>
  //               <CardSubtitle className="teamCardSubtitle">
  //                 <h5>
  //                   Record {schoolInfo.overallWins} - {schoolInfo.overallLoss}
  //                 </h5>
  //               </CardSubtitle>
  //               <Button
  //                 color="light"
  //                 onClick={() => {
  //                   // props.getSchoolInfo(schoolInfo);
  //                   props.infoOn();
  //                 }}
  //               >
  //                 More Info
  //               </Button>
  //             </CardBody>
  //           </Card>
  //         </div>
  //       );
  //     });
  //   };
  //   return (
  //     <>
  //       <h1>2021 NCAA Tournament Teams</h1>

  //       <div className="teamGrid">{displaySchoolCards}</div>
  //     </>
  //   );
  // };

  // export default TeamLineup;

  const [school, setSchool] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    await fetch(`http://localhost:3000/team/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(schoolInfo => {
        setSchool(schoolInfo);
        console.log(schoolInfo);
      })
      .catch(error => console.error(error));
  };

  const displaySchoolCards = school.map(schoolInfo => {
    console.log(schoolInfo);
    return (
      <Card
        style={{
          //   width: '18rem',
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
          <CardSubtitle className="teamCardSubtitle">
            <h5>{schoolInfo.conference}</h5>
          </CardSubtitle>
          <CardSubtitle className="teamCardSubtitle">
            <h5>
              Region: {schoolInfo.region}, Seed: {schoolInfo.seed}
            </h5>
          </CardSubtitle>
          <CardSubtitle className="teamCardSubtitle">
            <h5>
              Record {schoolInfo.overallWins} - {schoolInfo.overallLoss}
            </h5>
          </CardSubtitle>
          <Button
            color="light"
            onClick={() => {
              props.fetchSchoolInfo();
              props.infoOn();
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

export default TeamLineup;
