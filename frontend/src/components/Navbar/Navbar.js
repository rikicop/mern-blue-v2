import {
  NavbarElement,
  NavCartLink,
  NavLi,
  NavLogo,
  NavUl,
  NavSpanLink,
  NavSignLink,
  NavSignLinkSpan,
  HamburgerMenu,
  HamburgerLines,
} from "./NavbarElements";

const Navbar = ({ click }) => {
  return (
    <NavbarElement>
      <NavLogo to="/">TECNEMAS</NavLogo>
      <NavUl>
        <NavLi>
          <NavCartLink to="/cart">
            <NavSpanLink>Principal</NavSpanLink>
          </NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/">
            <NavSpanLink>Servicios</NavSpanLink>
          </NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/">
            <NavSpanLink>Blog</NavSpanLink>
          </NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/">
            <NavSpanLink>Equipo</NavSpanLink>
          </NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/">
            <NavSpanLink>Contacto</NavSpanLink>
          </NavCartLink>
        </NavLi>
        <NavLi>
          <NavSignLink to="/signin">
            <NavSignLinkSpan>Sign in</NavSignLinkSpan>
          </NavSignLink>
        </NavLi>
      </NavUl>

      <HamburgerMenu onClick={click}>
        <HamburgerLines></HamburgerLines>
        <HamburgerLines></HamburgerLines>
        <HamburgerLines></HamburgerLines>
      </HamburgerMenu>
    </NavbarElement>
  );
};

export default Navbar;
