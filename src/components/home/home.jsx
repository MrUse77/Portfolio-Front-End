import { Sesion, Menu } from "../options/header/buttonsHeader";
import { Buttons } from "../options/botones/botones";
import { Skills } from "../views/skills/Skills";
import "./home.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Borde } from "../../../utils/borde/Borde";
import { Row } from "react-bootstrap";
import { BootstrapIcons } from "../../../utils/BootstrapIcons/BootstrapIcons";

const opciones = [
  "PROYECTOS",
  "EXPERIENCIA",
  "EDUCACION",
  "DESCARGAR CV",
  "CONTACTO",
];
const front = [
  "Angular",
  "CSS",
  "HTML",
  "JavaScript",
  "react",
  "bootstrap",
  "TypeScript",
  "git",
  "github",
  "npm",
];
const back = ["SpringBoot", "MySQL", "expressjs", "mongodb", "nodejs"];
const tools = ["c", "arduino"];
const rutas = [
  "proyectos",
  "experiencia",
  "educacion",
  "https://drive.google.com/file/d/1qkKzHjsZg2LdFp1Xm-kOcsThatk-NA19/view?usp=drive_link",
  "https://api.whatsapp.com/send/?phone=5491144729261&text&type=phone_number&app_absent=0&text=Enviame%20un%20mensaje",
];
export function Home() {
  return (
    <>
      <header>
        <Navbar>
          <Container fluid="xl" className="Navbar">
            <Navbar.Brand href="/" className="Navbar__brand">
              Bienvenidos a mi portfolio
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Brand></Navbar.Brand>
              <Nav.Item>
                <Menu></Menu>
              </Nav.Item>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="background"></div>
        <div className="perfil__img row text-center">
          <img
            className="image rounded-5 img-fluid  mx-auto d-block"
            src="../assets/imagenes/IMG_20221212_221947_944.png"></img>
          <h1>AGUSTIN FRANCISCO DORICICH</h1>
          <h4>Técnico electrónico y desarrollador web full stack</h4>
        </div>
      </header>
      <main>
        <div className="main__div">
          {opciones.map((opciones, index) => (
            <Buttons key={index} name={opciones} route={rutas[index]}></Buttons>
          ))}
        </div>
        <Borde></Borde>
        <h1>MIS HABILIDADES</h1>
        <Container bsPrefix="cont">
          <h2>FRONT END</h2>
          <Borde></Borde>
          <Row>
            <Skills img={front}></Skills>
          </Row>
          <h2>BACK END</h2>
          <Borde></Borde>
          <Row>
            <Skills img={back}></Skills>
          </Row>
          <h2>OTRAS TECNOLOGIAS</h2>
          <Borde></Borde>
          <Row>
            <Skills img={tools}></Skills>
          </Row>
        </Container>
      </main>
      <footer>
        <div className="footer-power">
          <h4>Powered by React</h4>
          <img className="power" src="../assets/imagenes/react.png" alt="asd" />
        </div>
        <div className="footer-copy">
          <BootstrapIcons name={"c-circle"}></BootstrapIcons>
          <h6>Copyright 2023</h6>
        </div>
      </footer>
    </>
  );
}
