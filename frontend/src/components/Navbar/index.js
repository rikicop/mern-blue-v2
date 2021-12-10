import {
  NavbarElement,
  NavCartLink,
  NavLi,
  NavLogo,
  NavUl,
  NavSignLink,
  NavSignLinkSpan,
  HamburgerMenu,
  HamburgerLines,
} from "./NavbarElements";

const Navbar = ({ click, show }) => {
  return (
    <NavbarElement>
      <NavLogo to="/">TECNEMAS</NavLogo>
      <NavUl>
        <NavLi>
          <NavCartLink to="/cart">Principal</NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/">Servicios</NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/">Blog</NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/">Equipo</NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/">Contacto</NavCartLink>
        </NavLi>
        <NavLi>
          <NavSignLink to="/signin">
            <NavSignLinkSpan>Sign in</NavSignLinkSpan>
          </NavSignLink>
        </NavLi>
      </NavUl>

      <HamburgerMenu show={show} onClick={click}>
        <HamburgerLines></HamburgerLines>
        <HamburgerLines></HamburgerLines>
        <HamburgerLines></HamburgerLines>
      </HamburgerMenu>
    </NavbarElement>
  );
};

export default Navbar;
