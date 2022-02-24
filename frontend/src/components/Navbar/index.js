/* import { useNavigate } from "react-router"; */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
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
  /* const navigate = useNavigate(); */
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {}, [userInfo]);
  return (
    <NavbarElement>
      <NavLogo to="/">TECNEMAS</NavLogo>
      <NavUl>
        <NavLi>
          <NavCartLink to="/">Principal</NavCartLink>
        </NavLi>
        {/*<NavLi>
          <NavCartLink to="/cart">Servicios</NavCartLink>
        </NavLi> */}
        <NavLi>
          <NavCartLink to="/blogs">Blog</NavCartLink>
        </NavLi>
        <NavLi>
          <NavCartLink to="/myposts">My Posts</NavCartLink>
        </NavLi>
        <NavLi>
          <NavSignLink to="/signin">
            <NavSignLinkSpan>Sign in</NavSignLinkSpan>
          </NavSignLink>
        </NavLi>
        <NavLi>
          <NavCartLink
            to="/"
            style={{ color: "#ef5350", fontWeight: "bolder" }}
            onClick={logoutHandler}
          >
            LogOut
          </NavCartLink>
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
