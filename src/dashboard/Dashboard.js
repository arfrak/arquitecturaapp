import { useLocation } from "react-router-dom";
import TopBar from '../components/TopBar';
import { Container } from "reactstrap";
import courses from '../components/courses'
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function (props) {
  const message1 = "Este espacio sirve para ver de forma detallada los cursos asignados a su perfil, " + 
                  "esperamos que sean de su mayor agrado y que pueda completarlos de forma correcta.";
  const message2 = "La educación virtual " + 
                  "es una estrategia educativa que facilita el manejo de la información y que permite la " + 
                  "aplicación de nuevos métodos pedagógicos enfocados al desarrollo de aprendizajes significativos, " + 
                  "los cuales están centrados en el estudiante y en la participación activa.";
  const location = useLocation();

  let navigate = useNavigate();
  const nav = navigate('/courses/' + '1'/*props.course.id*/, {
    state: {
      idUsuario: props.idUsuario, 
      idCourse: '1',
      title: 'Hola',
      shortDescription: 'Hola pues...',
      description: 'Hole pues pues....'
    }
  });

  const headers = {
    'Content-Type': 'application/json'
  };

  const article = {
    "idUsuario": ''/*location.state.idUsuario*/,
  };

  //const [list, setList] = useState([]);
  /*useEffect(() => {
    axios.post("https://evergreen.free.beeceptor.com/courses/", article, { headers })
      .then((response) => {
        setList(response.data.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);*/

  return(
    <div>
      <TopBar />
      <div class="jumbotron">
        <Container>
          <h1 className="display-5">Bienvenido { /*location.state.nombre*/ } { /*location.state.apellido*/ }</h1>
          <p className="lead">Usuario: { /*location.state.usuario*/ } - Perfil: { /*location.state.gerencia*/ }</p>
          <p className="lead">{ message1 } { message2 }</p>
        </Container>
      </div>
      <div className="Home page">
        <header>
          <h1>React Online Course Site</h1>
        </header>
        {courses.map((course) => (
          course.status === false ? 
          <section key={course.id} className="summary">
            <div>
              <div className="title">
                <h2>
                  <Link
                    className="no-underline cursor-pointer"
                    to={nav}>
                    {course.title}
                  </Link>
                </h2>
              </div>
              <p>
                <Link
                  className="no-underline cursor-pointer"
                  to={nav}>
                  {course.shortDescription}
                </Link>
              </p>
            </div>
          </section>
          : <div> </div>
        ))}
      </div>
    </div>
  );
}