import React from "react";
import Icon1 from "../../images/svg-2.svg";

import {
  CardBody,
  CardButtons,
  CardContainer,
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
  return (
    <>
      <CardsContainer>
        <CardsHeader>Mis Puplicaciones</CardsHeader>
        <CardWrapper>
          <CardContainer>
            <CardBody>
              <CardImg src={Icon1} />
              <CardTitle>Hola</CardTitle>
              <CardDescription>Soy Facundo</CardDescription>
            </CardBody>
            <CardButtons>
              <CardEdit>Editar</CardEdit>
              <CardDelete>Borrar</CardDelete>
            </CardButtons>
          </CardContainer>
          <CardContainer>
            <CardBody>
              <CardImg src={Icon1} />
              <CardTitle>Hola</CardTitle>
              <CardDescription>Soy Facundo</CardDescription>
            </CardBody>
            <CardButtons>
              <CardEdit>Editar</CardEdit>
              <CardDelete>Borrar</CardDelete>
            </CardButtons>
          </CardContainer>
          <CardContainer>
            <CardBody>
              <CardImg src={Icon1} />
              <CardTitle>Hola</CardTitle>
              <CardDescription>Soy Facundo</CardDescription>
            </CardBody>
            <CardButtons>
              <CardEdit>Editar</CardEdit>
              <CardDelete>Borrar</CardDelete>
            </CardButtons>
          </CardContainer>
          <CardContainer>
            <CardBody>
              <CardImg src={Icon1} />
              <CardTitle>Hola</CardTitle>
              <CardDescription>Soy Facundo</CardDescription>
            </CardBody>
            <CardButtons>
              <CardEdit>Editar</CardEdit>
              <CardDelete>Borrar</CardDelete>
            </CardButtons>
          </CardContainer>
          <CardContainer>
            <CardBody>
              <CardImg src={Icon1} />
              <CardTitle>Hola</CardTitle>
              <CardDescription>Soy Facundo</CardDescription>
            </CardBody>
            <CardButtons>
              <CardEdit>Editar</CardEdit>
              <CardDelete>Borrar</CardDelete>
            </CardButtons>
          </CardContainer>
          <CardContainer>
            <CardBody>
              <CardImg src={Icon1} />
              <CardTitle>Hola</CardTitle>
              <CardDescription>Soy Facundo</CardDescription>
            </CardBody>
            <CardButtons>
              <CardEdit>Editar</CardEdit>
              <CardDelete>Borrar</CardDelete>
            </CardButtons>
          </CardContainer>
          <CardContainer>
            <CardBody>
              <CardImg src={Icon1} />
              <CardTitle>Hola</CardTitle>
              <CardDescription>Soy Facundo</CardDescription>
            </CardBody>
            <CardButtons>
              <CardEdit>Editar</CardEdit>
              <CardDelete>Borrar</CardDelete>
            </CardButtons>
          </CardContainer>
        </CardWrapper>
      </CardsContainer>
    </>
  );
};

export default Cards;
