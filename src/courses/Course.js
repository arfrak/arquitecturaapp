import TopBar from '../components/TopBar';
import courses from '../components/courses'
import { useParams } from 'react-router-dom'
import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Course(props) {
  const { courseId } = useParams();
  const [ show, setOpen ] = useState(false);
  const course = courses.find(course => course.id === parseInt(courseId));
  let disableButton = "btn btn-success disabled";
  let enableButton = "btn btn-success";
  const [ buttonState, setButtonState ] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false); 
    setButtonState(false)
  };

  return (
    <div>
      <TopBar />
      <div className="Course page">
        <header>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </header>
        <div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" class={buttonState ? enableButton : disableButton} style={{ width: '150px' }} onClick={handleClickOpen}>
              Completar curso
            </button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Curso terminado de forma correcta.</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}

export default Course