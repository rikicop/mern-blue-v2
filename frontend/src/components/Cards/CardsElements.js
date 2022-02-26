import styled from "styled-components/macro";

export const CardsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const CardsHeader = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  font-size: 2rem;
`;

export const CardWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CardContainer = styled.div`
  overflow: hidden;
  box-shadow: 0 2px 20px #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 200ms ease-in;
  &:hover {
    transform: scale(1.02);
  }
`;

export const CardBody = styled.div`
  padding: 0;
  color: white;
`;

export const CardImg = styled.img`
  height: 12rem;
  width: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.h1`
  padding: 1rem;
  font-size: 15px;
`;

export const CardDescription = styled.p`
  padding: 0 1rem;
`;

export const CardButtons = styled.div`
  padding: 1rem;
`;

export const CardCreate = styled.button`
  padding: 1rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  border: 2px solid skyblue;
  background: transparent;
  color: skyblue;
  border-radius: 10px;
  transition: background 200ms ease-in, color 200ms ease-in;
`;

export const CardEdit = styled.button`
  padding: 1rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  border: 2px solid blue;
  background: transparent;
  color: blue;
  border-radius: 10px;
  transition: background 200ms ease-in, color 200ms ease-in;
`;

export const CardDelete = styled.button`
  padding: 1rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  border: 2px solid red;
  background: transparent;
  color: red;
  border-radius: 10px;
  transition: background 200ms ease-in, color 200ms ease-in;
`;

export const CardDateCreated = styled.p`
  padding: 0.2rem;
  color: white;
`;

export const CardCategory = styled.p`
  padding: 0.2rem;
  color: white;
`;
