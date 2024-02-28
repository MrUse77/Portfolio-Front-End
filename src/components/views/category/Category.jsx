
import "./Category.css";
import { Cards } from "../../../../utils/Cards/Cards";
import { Container } from "react-bootstrap";
import { Menu } from "../../options/header/buttonsHeader";
import { Menu2 } from "../../options/menu/menu";
import { useState, useEffect } from "react";
import { Loading } from "../../../../utils/loading/Loading";
import axios from "axios";

export function Category({ show, title }) {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async (data) => {
    try {
      const response = await axios(
        `https://portfolio-five-bay-61.vercel.app/api/${data}/get`
      );
      const datos = await response.data;
      return datos;
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const fetchDataAndShow = async () => {
    let dato;
    switch (show) {
      case "educacion":
        dato = await getData(show);
        setCategory(dato);
        break;
      case "experiencia":
        dato = await getData(show);
        setCategory(dato);
        break;
      case "proyectos":
        dato = await getData(show);
        setCategory(dato);
        break;
    }
  };
  useEffect(() => {
    fetchDataAndShow();
  }, []);

  const menu = () => {
    if (window.innerWidth > 950) {
      return <Menu2></Menu2>;
    } else {
      return <Menu initCat={true}></Menu>;
    }
  };

  return (
    <>
      <div className="menu-Cat">{menu()}</div>
      <h1 className="titulo">{title}</h1>
      <Container>
        {loading ? (
          <div className="loading">
            <Loading></Loading>
          </div>
        ) : null}
        <ul className="cards">
          {show === "educacion"
            ? category.educacion && (
                <Cards category={category.educacion}></Cards>
              )
            : null}
          {show === "experiencia"
            ? category.experiencia && (
                <Cards category={category.experiencia}></Cards>
              )
            : null}
          {show === "proyectos"
            ? category.proyectos && (
                <Cards category={category.proyectos}></Cards>
              )
            : null}
        </ul>
      </Container>
    </>
  );
}
