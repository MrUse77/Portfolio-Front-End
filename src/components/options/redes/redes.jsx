import { BootstrapIcons } from "../../../../utils/BootstrapIcons/BootstrapIcons";
import "./redes.css";
const redes = ["Instagram", "Linkedin", "Github"];
const redesIcons = ["instagram", "linkedin", "github"];
const links = [
  import.meta.env.VITE_URL_INSTAGRAM,
  import.meta.env.VITE_URL_LINKEDIN,
  import.meta.env.VITE_URL_GITHUB,
];

export function Redes() {
  return (
    <ul>
      {redes.map((redes, index) => (
        <li key={index}>
          <a href={links[index]} target="_blank" rel="noreferrer">
            <BootstrapIcons name={redesIcons[index]}></BootstrapIcons>
            {redes}
          </a>
        </li>
      ))}
    </ul>
  );
}
