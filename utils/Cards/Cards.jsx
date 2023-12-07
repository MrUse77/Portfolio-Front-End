import { Card, Button } from "react-bootstrap";
import {
  Overlays,
  OverlaysCreate,
} from "../../src/components/views/overlay/overlay";
import { BootstrapIcons } from "../BootstrapIcons/BootstrapIcons";
import { useState } from "react";
import "./Cards.css";

export function Cards({ category }) {
  const [show, setShow] = useState(null);
  const showing = (category) => {
    setShow(category);
  };
  const notShowing = () => {
    setShow(null);
  };
  return (
    <>
      {category.map((category) => (
        <li className="cards" key={category._id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="img-card"
              variant="top"
              src={category.mediaId}
            />
            <Card.Body>
              <Card.Title>
                {category.nameInstitution ||
                  category.nameEnterprise ||
                  category.nameProject}
              </Card.Title>
              <br></br>
              <Button variant="primary" onClick={() => showing(category)}>
                Mas Info
              </Button>
            </Card.Body>
          </Card>
        </li>
      ))}
      {show && (
        <Overlays info={show} onClose={notShowing} show={show}></Overlays>
      )}
    </>
  );
}
export function CreateCard() {
  const [show, setShow] = useState(null);
  const showing = () => {
    setShow(true);
  };
  const notShowing = () => {
    setShow(null);
  };
  return (
    <li className="cards">
      <button className="btn-create" onClick={showing}>
        <Card style={{ width: "18rem" }}>
          <BootstrapIcons name={"plus-lg"}></BootstrapIcons>
        </Card>
      </button>
      {show && <OverlaysCreate onClose={notShowing}></OverlaysCreate>}
    </li>
  );
}
