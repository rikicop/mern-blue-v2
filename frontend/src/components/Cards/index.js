import { useEffect, useState } from "react";
/* import Icon1 from "../../images/svg-2.svg"; */
import { Link } from "react-router-dom";
import axios from "axios";

import {
  CardBody,
  CardButtons,
  CardCategory,
  CardContainer,
  CardCreate,
  CardDateCreated,
  CardDelete,
  CardDescription,
  CardEdit,
  CardImg,
  CardsContainer,
  CardsHeader,
  CardTitle,
  CardWrapper,
} from "./CardsElements";

const Cards = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Esta Seguro??")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <CardsContainer>
        <CardsHeader>Bienvenido Ricardo</CardsHeader>
        <Link to="createnpost">
          <CardCreate> Create New Post </CardCreate>
        </Link>
        <CardWrapper>
          {notes.map((pub) => (
            <CardContainer key={pub._id}>
              <CardBody>
                <CardImg src={pub.imagen} />
                <CardTitle>{pub.title}</CardTitle>
                <CardDescription>{pub.description}</CardDescription>
              </CardBody>
              <CardButtons>
                <Link to={`/post/${pub._id}`}>
                  <CardEdit>Editar</CardEdit>
                </Link>
                <CardDelete onClick={() => deleteHandler(pub._id)}>
                  Borrar
                </CardDelete>
              </CardButtons>
              <CardDateCreated>Created - On</CardDateCreated>
              <CardCategory>{pub.category}</CardCategory>
            </CardContainer>
          ))}
        </CardWrapper>
      </CardsContainer>
    </>
  );
};

export default Cards;
