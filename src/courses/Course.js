import TopBar from '../components/TopBar';
import { useLocation } from "react-router-dom";

function Course(props) {
  const location = useLocation();

  const headers = {
    'Content-Type': 'application/json'
  };

  const article = {
    "idUsuario": location.state.idUsuario, 
    "idCourse": location.state.idCourse
  };
/*
  const sendState = () => {
    setIsShown(false);
    axios.post("http://20.75.11.36/", article, { headers })
    .then((response) => {
      if(response.status === 200) {
        routeChange(
          response.data.info.idUsuario, 
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
*/

  const sendState = () => {}

  return (
    <div>
      <TopBar />
      <div className="Course page">
      <header>
          <h1>{location.state.title}</h1>
          <p>{location.state.description}</p>
        </header>
        <div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={sendState}>
              Terminar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course