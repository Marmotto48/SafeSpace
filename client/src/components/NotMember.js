import React from "react";
import Modal from "react-bootstrap/Modal";

const NotMember = ({ setShow, show }) => {
  // modal

  const handleClose = () => setShow(false);

  return (
    <div>
      <>
        <>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <h6 style={{ textAlign: "center", margin: "auto" }}>
                Not a member ? Join our Community !
              </h6>
            </Modal.Header>
          </Modal>
        </>
      </>
    </div>
  );
};

export default NotMember;
