import styled from "styled-components/macro";

export const SideDContainer = styled.div`
  width: 70%;
  background: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.3s ease-out;
  /* Esto es para que queden en el medio (Y) */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 960px) {
    display: none;
  }
`;

export const SideDLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  & > li {
    display: flex;
    align-items: center;
  }

  & > li > a:hover {
    background: #333;
    color: #c4c4c4;
  }

  & > li > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    padding: 1rem;
    text-decoration: none;
    color: #171717;
    font-size: 1.6rem;
  }

  & > li > a > span {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }
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
