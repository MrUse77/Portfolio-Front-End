import { BootstrapIcons } from "../../../../utils/BootstrapIcons/BootstrapIcons";
import "./redes.css";
const redes = ["Instagram", "Linkedin", "Github"];
const redesIcons = ["instagram", "linkedin", "github"];
const links = [
  "https://www.instagram.com/agus_doricich/",
  "https://www.linkedin.com/in/agustin-doricich-96891b211/",
  "https://github.com/MrUse77",
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
