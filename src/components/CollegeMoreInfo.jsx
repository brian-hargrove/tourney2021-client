import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const CollegeMoreInfo = props => {
  const { buttonLabel, className } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = e => {
    setModalOpen(!modalOpen);
  };

  const handleClose = e => {
    setModalOpen(false);
  };

  //   const externalCloseBtn = (
  //     <button
  //       className="close"
  //       style={{ position: 'absolute', top: '15px', right: '15px' }}
  //       onClick={toggle}
  //     >
  //       &times;
  //     </button>
  //   );

  const teamMoreInfo = (event, team) => {
    event.preventDefault();

    fetch(`http://localhost:3000/team/school/${props.moreTeamInfo.college}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(response => {
      props.fetchColleges();
      props.moreInfoOff();
    });
    // setModalOpen(true);
  };

  return (
    <Modal
      isOpen={toggleModal}
      //   toggle={toggleModal}
      //   className={className}
      //   external={externalCloseBtn}
    >
      <ModalHeader
        style={{
          backgroundColor: `${props.moreTeamInfo.color2}`,
          color: `${props.moreTeamInfo.color1}`,
        }}
      >
        <span>{props.moreTeamInfo.college}</span>
      </ModalHeader>
      <ModalBody
        style={{
          backgroundColor: `${props.moreTeamInfo.color2}`,
          color: `${props.moreTeamInfo.color1}`,
        }}
      >
        <h4>
          {props.moreTeamInfo.city}, {props.moreTeamInfo.state}
        </h4>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.moreInfoOff}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CollegeMoreInfo;
