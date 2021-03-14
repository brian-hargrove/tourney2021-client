import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import SchoolInfo from './SchoolInfo';
import TeamLineup from './SchoolTable';

const SchoolIndex = props => {
  const [schoolInfo, setSchoolInfo] = useState([]);
  const [getInfoOn, setGetInfoOn] = useState(false);
  const [collegeInfo, setCollegeInfo] = useState([]);

  const fetchSchoolInfo = async () => {
    await fetch(`http://localhost:3000/team/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(schInfo => {
        setSchoolInfo(schInfo);
        console.log('school info:', schInfo);
      });
  };

  const getSchoolInfo = info => {
    setCollegeInfo(info);
  };

  const infoOn = () => {
    setGetInfoOn(true);
  };

  const infoOff = () => {
    setGetInfoOn(false);
  };
  useEffect(() => {
    fetchSchoolInfo();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="9">
          <TeamLineup
            schoolInfo={schoolInfo}
            getSchoolInfo={getSchoolInfo}
            infoOn={infoOn}
            fetchSchoolInfo={fetchSchoolInfo}
          />
        </Col>
        {getInfoOn ? (
          <SchoolInfo
            infoOff={infoOff}
            fetchSchoolInfo={fetchSchoolInfo}
            collegeInfo={collegeInfo}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default SchoolIndex;

// const SchoolIndex = props => {
//   const [getInfo, setGetInfo] = useState([]);
//   const [infoActive, setInfoActive] = useState(false);

//   const fetchSchoolInfo = () => {
//     fetch(`http://localhost:3000/team/`, {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//       }),
//     })
//       .then(response => response.json())
//       .then(schInfo => {
//         setGetInfo(schInfo);
//         console.log('march:', schInfo);
//       });
//   };

//   const infoOn = () => {
//     setInfoActive(true);
//   };

//   const infoOff = () => {
//     setInfoActive(false);
//   };

//   useEffect(() => {
//     fetchMoreSchoolInfo();
//   });

//   const getMoreSchoolInfo = schInfo => {
//     setGetInfo();
//   };

//   return (
//     <>
//       <Container>
//         <Row>
//           <Col fluid="lg">
//             <TeamLineup
//               getInfo={getInfo}
//               infoOn={infoOn}
//               getMoreSchoolInfo={getMoreSchoolInfo}
//               // fetchMoreSchoolInfo={fetchMoreSchoolInfo}
//             />
//           </Col>
//           {infoActive ? (
//             <SchoolInfo
//               getMoreSchoolInfo={getMoreSchoolInfo}
//               infoOff={infoOff}
//               // fetchMoreSchoolInfo={fetchMoreSchoolInfo}
//             />
//           ) : (
//             <></>
//           )}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default SchoolIndex;
