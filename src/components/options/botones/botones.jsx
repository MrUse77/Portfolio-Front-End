import "./botones.css";

export function Buttons({ name, route }) {
  if (
    route === "experiencia" ||
    route === "educacion" ||
    route === "proyectos"
  ) {
    route = `/${route}`;
  }
  if (name === "CONTACTO") {
    route = "https:wa.me/5491144729261";
  }
  return (
    <a className="button" href={route}>
      <h1>{name}</h1>
    </a>
  );
}
