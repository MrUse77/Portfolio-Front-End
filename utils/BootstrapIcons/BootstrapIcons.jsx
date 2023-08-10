import 'bootstrap-icons/font/bootstrap-icons.css'
import './BootstrapIcons.css'
export function BootstrapIcons({name}){
  return (
      <i className={`bi bi-${name} icons`}></i>
  );
}