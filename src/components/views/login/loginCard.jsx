import "./loginCard.css";
import { BootstrapIcons } from "../../../../utils/BootstrapIcons/BootstrapIcons";
import "bootstrap/dist/css/bootstrap.min.css";

export function LoginCard() {
  return (
    <main className="loginCard">
      <header className="header-login">
        <div className="cerrar">
          <a href="/" className="buttonHeader exit">
            <BootstrapIcons name={"caret-left-fill"}></BootstrapIcons>
          </a>
        </div>
        <h1 className="edu">INICIAR SESION</h1>
      </header>
      <form action="post" className="session">
        <label htmlFor="user">
          <p>Usuario</p>
          <input type="text" className="relleno form-control" />
        </label>
        <br />
        <label htmlFor="password">
          <p>Contraseña:</p>
          <input type="text" className="relleno form-control" />
        </label>
        <br />
        <div className="">
          <a href="/" type="submit" className="login">
            Iniciar Sesion
          </a>
        </div>
      </form>
    </main>
  );
}
export function Signup() {
  return (
    <main className="loginCard">
      <header className="header-login">
        <div className="cerrar">
          <a href="/" className="buttonHeader exit">
            <BootstrapIcons name={"caret-left-fill"}></BootstrapIcons>
          </a>
        </div>
        <h1 className="edu">Registrarse</h1>
      </header>
      <form action="post" className="session">
        <label htmlFor="user">
          <p>Usuario</p>
          <input type="text" className="relleno form-control" />
        </label>
        <br />
        <label htmlFor="password">
          <p>Contraseña:</p>
          <input type="password" className="relleno form-control" />
        </label>
        <br />
        <label htmlFor="email">
          <p>Corre Electronico:</p>
          <input type="email" className="relleno form-control" />
        </label>
        <br />
        <label htmlFor="gender">
          <p>Genero:</p>
          <p>
            <input type="radio" className="box" name="genero" value={"h"} />
            Masculino
          </p>
          <p>
            <input type="radio" className="box" name="genero" value={"m"} />
            Femenino
          </p>
        </label>
        <br />
        <div className="">
          <a href="/" type="submit" className="login">
            Registrarse
          </a>
        </div>
      </form>
    </main>
  );
}
