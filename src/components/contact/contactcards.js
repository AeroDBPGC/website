import React, {useState} from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Modal} from "react-bootstrap"

import contactCardStyle from "../../styles/contact/contactcard.module.scss"

const ContactCard = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <div className={contactCardStyle.contactCard} style={{ background:`${props.background}`}} onClick={handleShow}>
            <div>
              <p className={contactCardStyle.linkTitle}>{ props.title1 }</p>
              <p className={contactCardStyle.linkTitle}>{ props.title2 }</p>
              <p className={contactCardStyle.linkDescription}>{ props.description }</p>
            </div>
        </div>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Google Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe src={props.g_form} width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0" title="Google Form">Loading…</iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}


export default ContactCard
