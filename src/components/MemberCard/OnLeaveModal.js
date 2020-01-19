import React from 'react';
import { Modal } from 'react-bootstrap';

export function OnLeaveModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={() => props.handleCloseModal()}>
        <Modal.Header closeButton>Status da licença:</Modal.Header>
        <Modal.Body>
          Este membro está de licença pelo período:{' '}
          <b>{props.periodoLicenca}</b>
        </Modal.Body>
      </Modal>
    </>
  );
}
