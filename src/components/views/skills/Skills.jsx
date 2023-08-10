import { Row, Col, Card } from "react-bootstrap";
import "./Skills.css";
import { auto } from "@popperjs/core";

export function Skills({ img }) {
  if (!Array.isArray(img)) {
    // Si `data` no es un array, puedes mostrar un mensaje de error o retornar null
    // según la lógica de tu aplicación
    return <p>Los datos no son válidos.</p>;
  }
  return (
    <Row xs={auto} className="g-4">
      {Array.from(img).map((_, idx) => (
        <Col xs={auto} key={idx}>
          <Card>
            <Card.Img
              variant="top"
              src={`../assets/imagenes/${img[idx]}.png`}
              alt={img[idx]}
            />
            <Card.Body>
              <Card.Title className="text-center">{img[idx]}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
