import styled from "styled-components/macro";
/* import { Link as LinkR } from "react-router-dom"; */
/* import { Link as LinkS } from "react-scroll"; */

export const SideDContainer = styled.div`
  width: 70%;
  background: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  overflow-x: hidden;
  overflow-y: auto;
  /*  overflow: hidden;
  position: absolute; */
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.3s ease-out;
  /* Esto es para que queden en el medio (Y) */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 960px) {
    display: none;
  }
`;

export const SideDUl = styled.ul`
  display: flex;
  margin-top: 55px;
  flex-direction: column;
  list-style: none;
`;

export const SideLi = styled.li`
  display: flex;
  align-items: center;
  & > a:hover {
    color: #0050d5;
    margin-left: 20px;
    transition: all 0.5s ease-out;
  }

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    padding: 1rem;
    text-decoration: none;
    color: #202020;
    font-size: 1.6rem;
  }

  /*   & > a > span {
    display: flex;
    align-items: center;
  } */
`;

export const SignDiv = styled.div`
  background: #16c5ff;
  padding: 12px 15px;
  border-radius: 20px;
`;

export const SideDCBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #171717;
  border-radius: 50%;
  margin-left: 8px;
  color: #fff;
  font-size: 1rem;
`;
