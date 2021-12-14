import React from "react";
/* import Icon1 from "../../images/svg-2.svg"; */
import { Link } from "react-router-dom";

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

import publicaciones from "../../data/posts";

const Cards = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Esta Seguro??")) {
    }
  };
  return (
    <>
      <CardsContainer>
        <CardsHeader>Bienvenido Ricardo</CardsHeader>
        <Link to="createnpost">
          <CardCreate> Create New Post </CardCreate>
        </Link>
        <CardWrapper>
          {publicaciones.map((pub) => (
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
