import "./botones.css";

export function Buttons({ name, route }) {
  return (
    <a className="button" href={route}>
      <h1>{name}</h1>
    </a>
  );
}
