import { Button, Modal, ModalTitle } from "react-bootstrap";
import React, { useState } from "react";

import CustomerForm from "./CustomerForm";

function Customer(props) {
  const [show, setShow] = useState(props.showStatus);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

<CustomerForm/>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Customer;
