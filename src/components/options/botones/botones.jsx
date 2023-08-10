import "./botones.css";

export function Buttons({ name, route }) {
  if (
    route === "experiencia" ||
    route === "educacion" ||
    route === "proyectos"
  ) {
    route = `/${route}`;
  }
  return (
    <a className="button" href={route}>
      <h1>{name}</h1>
    </a>
  );
}
