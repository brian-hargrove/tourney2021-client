import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import '../styles/collegeMoreInfo.css';
import APIURL from '../helpers/environment';

const CollegeMoreInfo = props => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = e => {
    setModalOpen(!modalOpen);
  };

  const teamMoreInfo = (event, team) => {
    event.preventDefault();

    fetch(`${APIURL}/team/school/${props.moreTeamInfo.college}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(response => {
      props.fetchColleges();
      props.moreInfoOff();
    });
  };

  return (
    <Modal isOpen={toggleModal}>
      <ModalHeader
        style={{
          backgroundColor: `${props.moreTeamInfo.color1}`,
          color: `${props.moreTeamInfo.color2}`,
        }}
      >
        <span style={{ textAlign: 'center', fontSize: '30px' }}>
          {props.moreTeamInfo.college}
        </span>
      </ModalHeader>
      <ModalBody
        style={{
          backgroundColor: `${props.moreTeamInfo.color1}`,
          color: `${props.moreTeamInfo.color2}`,
        }}
      >
        <h4>
          Location: {props.moreTeamInfo.city}, {props.moreTeamInfo.state}
        </h4>
        <h4>Head Coach: {props.moreTeamInfo.headCoach}</h4>
        <h4>School Colors: {props.moreTeamInfo.colors}</h4>
        <hr />
        <h4>NCAA HISTORY</h4>
        <p>
          This will be {props.moreTeamInfo.college}'s{' '}
          {props.moreTeamInfo.totalApp} tourney appearance.
        </p>
        {/* <h5>Total Appearance:{props.moreTeamInfo.totalApp}</h5> */}
        <h5>Last Appearance: {props.moreTeamInfo.lastApp}</h5>
        <h5>Best Finish: {props.moreTeamInfo.bestFinish}</h5>
        <h5>
          Tournament Record: {props.moreTeamInfo.ncaaWin} -{' '}
          {props.moreTeamInfo.ncaaLoss}
        </h5>
      </ModalBody>
      <ModalFooter>
        {/* <p>
          <a href="{props.moreTeamInfo.websiteLink}">Athletic Website</a>
        </p> */}
        <Button color="secondary" onClick={props.moreInfoOff}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CollegeMoreInfo;
