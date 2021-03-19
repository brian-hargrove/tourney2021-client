import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const SchoolInfo = props => {
  const [collegeInfo, setCollegeInfo] = useState([]);
  const [modal, setModal] = useState(false);

  const { fullscreen } = props;
  const toggle = () => setModal(!modal);

  const fetchSchoolInfo = () => {
    fetch(`http://localhost:3000/team/college/${props.SchoolInfo.college}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(info => {
        setCollegeInfo(info);
        props.infoOff();
        console.log(info);
      });
  };

  return (
    <div>
      <Modal
        isOpen={modal}
        collegeInfo={collegeInfo}
        toggle={toggle}
        fullscreen={fullscreen}
        fetchSchoolInfo={fetchSchoolInfo}
      >
        <ModalHeader toggle={toggle}>SCHOOL</ModalHeader>
        <ModalBody>information</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SchoolInfo;
