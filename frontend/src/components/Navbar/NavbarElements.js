import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavbarElement = styled.nav`
  width: 100%;
  background-color: #0050d5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  z-index: 50;
`;
/* Usa el h2 directamente mientras tanto... */
export const NavLogo = styled.div`
  color: #f4f4f4;
  font-size: 1.4rem;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavLi = styled.li`
  padding-left: 1.5rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  /* .navbar__links > li > a { */
  text-decoration: none;
  color: #f4f4f4;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

export const NavSpanLink = styled.span`
  /* .navbar__links > li > a > span { */
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const NavCartLink = styled(Link)`
  /* .cart__link { */
  background: none;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    background: #16c5ff;
    color: #f4f4f4;
  }
`;

export const SignLink = styled(Link)`
  /* .sign__link { */
  background: #16c5ff;
  padding: 8px 8px 8px 1px;
  border-radius: 8px;
`;

export const SignLinkSpan = styled.span`
  /* .sign__links > li > a > span { */
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

/* .cart__link:hover {
  background: #16c5ff;
  color: #f4f4f4;
} */

export const HamburgerMenu = styled.div`
  /* .hamburger__menu { */
  display: none;
  width: 30px;
  height: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media (max-width: 960px) {
    display: flex;
  }
`;

export const HamburgerLines = styled.div`
  width: 100%;
  height: 3px;
  background: #f4f4f4;
  &:hover {
    background: rgb(0, 0, 0);
  }
`;

/*
.hamburger__menu:hover > div {
  background: rgb(0, 0, 0);
}

.hamburger__menu > div {
  width: 100%;
  height: 3px;
  background: #f4f4f4;
}
*/

/*
MEDIA QUERIES

@media (max-width: 960px) {
  .navbar__links {
    display: none;
  }

  .hamburger__menu {
    display: flex;
  }
}

@media (max-width: 500px) {
  .navbar__logo h2 {
    font-size: 1rem;
  }
}
 */
