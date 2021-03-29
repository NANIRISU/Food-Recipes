import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const NewModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.post, "newmodal");
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        {props.post.title}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <img
          src={props.post.image}
          style={{
            height: "30vh",
            width: "38%",
            alignSelf: "center",
            borderRadius: "20px",
            marginTop: "30px",
          }}
        />
        <Modal.Body style={{ fontWeight: "bold" }}>
          {" "}
          {props.post.desc}{" "}
        </Modal.Body>
        <Modal.Body>{props.post.author} </Modal.Body>
        <Modal.Body>{props.post.deatils} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            continue Reading
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewModal;
