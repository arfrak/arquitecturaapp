import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import courses from '../components/courses';
import CourseSummary from '../dashboard/CourseSummary'
import TopBar from '../components/TopBar';
import { Container } from "reactstrap";
import axios from "axios";

export default function (props) {
  const message1 = "Este espacio sirve para ver de forma detallada los cursos asignados a su perfil, " + 
                  "esperamos que sean de su mayor agrado y que pueda completarlos de forma correcta.";
  const message2 = "La educación virtual " + 
                  "es una estrategia educativa que facilita el manejo de la información y que permite la " + 
                  "aplicación de nuevos métodos pedagógicos enfocados al desarrollo de aprendizajes significativos, " + 
                  "los cuales están centrados en el estudiante y en la participación activa.";
  const location = useLocation();
  return(
    <div>
      <TopBar />
      <div class="jumbotron">
        <Container>
          <h1 className="display-5">Bienvenido { location.state.nombre } { location.state.apellido }</h1>
          <p className="lead">Usuario: { location.state.usuario } - Perfil: { location.state.gerencia }</p>
          <p className="lead">{ message1 } { message2 }</p>
        </Container>
      </div>
      <div className="Home page">
        <header>
          <h1>React Online Course Site</h1>
        </header>
        {courses.map((course) => (
          <CourseSummary course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}