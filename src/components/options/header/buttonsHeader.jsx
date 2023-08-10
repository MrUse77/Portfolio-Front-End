import { bottom, end, start, top } from "@popperjs/core";
import "./buttonsHeader.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BootstrapIcons } from "../../../../utils/BootstrapIcons/BootstrapIcons";
import { Options, Options2 } from "../menu/menu.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
export function Sesion({ name, route = "", onClick }) {
  return (
    <>
      <div className="">
        <a
          type="button"
          href={`/${route}`}
          className="buttonHeader"
          onClick={onClick}>
          {name}
        </a>
      </div>
    </>
  );
}
export function Menu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="">
        <Button
          className="login buttonHeader"
          variant="primary"
          onClick={handleShow}>
          <BootstrapIcons name={"list"}></BootstrapIcons>
        </Button>
      </div>
      <Offcanvas
        className="offcanvas"
        show={show}
        onHide={handleClose}
        placement={end}
        scroll={false}
        backdrop={true}
        data-bs-theme="dark">
        <Offcanvas.Header closeButton data-bs-theme="dark"></Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <Options2
              option={"INICIO"}
              link={"https://agusdoricich.vercel.app"}></Options2>
            <Options option={"CONTACTO"}></Options>
            <Options option={"REDES"}></Options>
            <Options2 option={"EDUCACION"} link={"educacion"}></Options2>
            <Options2 option={"EXPERIENCIA"} link={"experiencia"}></Options2>
            <Options2 option={"PROYECTOS"} link={"proyectos"}></Options2>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
