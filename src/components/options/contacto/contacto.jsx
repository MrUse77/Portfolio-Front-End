import "../redes/redes.css";
import { BootstrapIcons } from "../../../../utils/BootstrapIcons/BootstrapIcons.jsx";
const contact = ["agusdor14@gmail.com", "1144729261"];
const links2 = ["mailto:agusdor14@hotmail.com", "https:wa.me/5491144729261"];
const contactIcons = ["envelope", "whatsapp"];

export function Contacto() {
  return (
    <ul>
      {contact.map((contact, index) => (
        <li key={index}>
          <a href={links2[index]} target="_blank" rel="noreferrer">
            <BootstrapIcons name={contactIcons[index]}></BootstrapIcons>
            {contact}
          </a>
        </li>
      ))}
    </ul>
  );
}
