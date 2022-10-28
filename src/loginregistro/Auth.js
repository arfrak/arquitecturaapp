import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  let alertClassError = "alert alert-danger"
  let alertClassWarning = "alert alert-warning"
  let [authMode, setAuthMode] = useState("signin")
  const [statusMessage, setStatusMessage] = useState("ok");
  const [isShown, setIsShown] = useState(false);
  const [alertType, setAlertType] = useState(true);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  };

  let navigate = useNavigate();
  const routeChange = (id_usuario, usuario, nombre, apellido, gerencia, estado) => {
    navigate('/dashboard', {
      state: {
        idUsuario: id_usuario,
        usuario: usuario,
        nombre: nombre,
        apellido: apellido,
        gerencia: gerencia,
        estado: estado
      }
    });
  };

  const headers = {
    'Content-Type': 'application/json'
  };

  const article = {
    "username": username, 
    "password": password
  };

  const fetchData = () => {
    setIsShown(false);
    axios.post("http://20.75.11.36/login/", article, { headers })
    .then((response) => {
      if(response.status === 200) {
        routeChange(
          response.data.info.id_usuario, 
          response.data.info.usuario, 
          response.data.info.nombre, 
          response.data.info.apellido, 
          response.data.info.gerencia, 
          response.data.info.estado
        );
      } else {
        setStatusMessage("Error en las credenciales del usuario.");
        setAlertType(true);
        setIsShown(true);
      }
    })
    .catch((error) => {
      setStatusMessage("Error de respuesta del servidor.");
      setAlertType(false);
      setIsShown(true);
    })
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              No está registrado aun?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Registrarse
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Usuario</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Ingrese su usuario"
                onChange={e => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingrese su contraseña"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button" className="btn btn-primary" onClick={fetchData}>
                Ingresar
              </button>
            </div>
            <p className="text-center mt-2">
              
              Olvido su <a href="#">contraseña?</a>
            </p>
            { isShown && (
              <div className={alertType ? alertClassWarning : alertClassError } role="alert">
              <strong>Alerta!</strong> { statusMessage }
              </div>
            )}
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}