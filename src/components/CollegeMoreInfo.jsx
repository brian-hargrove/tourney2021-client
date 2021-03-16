import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader } from 'reactstrap';

const CollegeMoreInfo = props => {
  const teamMoreInfo = (event, team) => {
    event.preventDefault();

    fetch(`http://localhost:3000/team/school/${props.moreTeamInfo.college}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(response => {
      props.fetchColleges();
      props.infoOff();
    });
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>COLLEGE</ModalHeader>
      <h2>Nickname</h2>
    </Modal>
  );
};

export default CollegeMoreInfo;
