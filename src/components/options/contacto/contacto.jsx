import "../redes/redes.css";
import { BootstrapIcons } from "../../../../utils/BootstrapIcons/BootstrapIcons.jsx";
const contact = ["Correo Electronico", "Whatsapp"];
const links2 = [
  import.meta.env.VITE_URL_MAIL,
  import.meta.env.VITE_URL_WHATSAPP,
];
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
