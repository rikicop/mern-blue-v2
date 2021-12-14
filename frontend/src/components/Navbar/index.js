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
          <NavCartLink to="/">Principal</NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/cart">Servicios</NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/cart">Blog</NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/cart">Equipo</NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/myposts">My Posts</NavCartLink>
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
