import { Redes } from "../redes/redes.jsx";
import { Contacto } from "../contacto/contacto";
import { Button, Accordion } from "react-bootstrap";
import "./menu.css";

const opciones = [
  "INICIO",
  "PROYECTOS",
  "EXPERIENCIA",
  "EDUCACION",
  "DESCARGAR CV",
];
const rutas = [
  "https://agusdoricich.dev",
  "/proyectos",
  "/experiencia",
  "/educacion",
  import.meta.env.VITE_URL_CV,
];

export function Options({ option }) {
  if (option === "REDES") {
    return (
      <li>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Button>{option}</Accordion.Button>
            <Accordion.Body>
              <Redes></Redes>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br>
      </li>
    );
  }
  if (option === "CONTACTO") {
    return (
      <li>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Button>{option}</Accordion.Button>
            <Accordion.Body>
              <Contacto></Contacto>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br>
      </li>
    );
  }
}
export function Menu2() {
  if (window.innerWidth > 950) {
    return (
      <div className="options">
        {opciones.map((opciones, index) => (
          <Button key={index} href={`${rutas[index]}`}>
            <h5>{opciones}</h5>
          </Button>
        ))}
      </div>
    );
  } else {
    return (
      <div className="options">
        {opciones.map((opciones, index) => (
          <Button key={index} href={`${rutas[index]}`}>
            <h5>{opciones}</h5>
          </Button>
        ))}
      </div>
    );
  }
}
export function Options2({ option, link }) {
  return (
    <li className="categories">
      <Accordion className="no-icon">
        <a href={`${link}`}>
          <Accordion.Button className="btn-no-icon">{option}</Accordion.Button>
        </a>
      </Accordion>
    </li>
  );
}
