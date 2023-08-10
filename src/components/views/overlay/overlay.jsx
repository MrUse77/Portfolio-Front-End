import "./overlay.css";
import { BootstrapIcons } from "../../../../utils/BootstrapIcons/BootstrapIcons";
import { Button } from "react-bootstrap";
import { useState } from "react";

export function Overlays({ info, onClose }) {
  const date = new Date(info.date).toLocaleDateString();
  const dateEnd = () => {
    if (info.dateEnd) {
      return new Date(info.dateEnd).toLocaleDateString();
    } else {
      return "Aun en formacion";
    }
  };
  const dateInit = new Date(info.dateInit).toLocaleDateString();
  return (
    <div className="fondo">
      <div className="overlay">
        <section className="section--header">
          <Button onClick={onClose}>
            <BootstrapIcons name={"x-lg"}></BootstrapIcons>
          </Button>
        </section>
        <section className="section--body">
          <picture>
            <img src={info.mediaId} alt="" />
          </picture>
          <h1>
            {info.nameProject || info.nameEnterprise || info.nameInstitution}
          </h1>
          <div className="div--title">
            {info.Title ? (
              <>
                <h2>Carrera/Titulo: {info.Title}</h2>
              </>
            ) : (
              <p>{info.Description}</p>
            )}
          </div>
          {info.date ? (
            <div className="div--date">
              <section className="section--date">
                <h4>Fecha de subida: {date}</h4>
              </section>
            </div>
          ) : (
            <div className="div--date">
              <section className="section--date">
                <h4>Fecha Inicio: {dateInit}</h4>
              </section>
              <section className="section--date">
                <h4>Fecha Fin: {dateEnd()}</h4>
              </section>
            </div>
          )}
          {info.link ? (
            <div className="link ">
              <a className="btn btn-primary" type="button" href={"/"}>
                Ir a proyecto
              </a>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
export function OverlaysCreate({ onClose }) {
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="overlay">
      <section className="section--header">
        <Button onClick={onClose}>
          <BootstrapIcons name={"x-lg"}></BootstrapIcons>
        </Button>
      </section>
      <section className="section--body">
        <picture>
          <label htmlFor="mediaId">
            <input type="file" />
          </label>
        </picture>
        <label htmlFor="Title">
          <h1>Titulo</h1>
          <input
            type="text"
            value={input}
            placeholder="titulo"
            onChange={onInputChange}
          />
        </label>
        <div className="div--title">
          <>
            <h2>Titulo/Carrera:</h2>
            <h3>{""}</h3>
          </>
        </div>
        <div className="div--date">
          <section className="section--date">
            <h4>fecha Inicio:</h4>
            <h5>{"date"}</h5>
          </section>
        </div>
        <div className="div--date">
          <section className="section--date">
            <h4>fecha Inicio:</h4>
            <h5>{"dateInit"}</h5>
          </section>
          <section className="section--date">
            <h4>fecha Fin:</h4>
            <h5>{"dateEnd"}</h5>
          </section>
        </div>
        <a href={""}>Ir a proyecto</a>
      </section>
    </form>
  );
}
