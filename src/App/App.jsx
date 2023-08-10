import { Routes, Route } from "react-router-dom";
import { LoginCard, Signup } from "../components/views/login/loginCard";
import { Home } from "../components/home/home.jsx";
import { Category } from "../components/views/category/Category.jsx";

export function App() {
  return (
    <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/educacion"
          exact
          element={<Category show={"educacion"} title={"EDUCACION"} />}></Route>
        <Route
          path="/experiencia"
          exact
          element={
            <Category show={"experiencia"} title={"EXPERIENCIA"} />
          }></Route>
        <Route
          path="/proyectos"
          exact
          element={<Category show={"proyectos"} title={"PROYECTOS"} />}></Route>
        <Route path="/login" exact element={<LoginCard />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </main>
  );
}
