import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { SideDContainer, SideDUl, SignDiv, SideLi } from "./SideDElements";

const SideDrawer = ({ show, click }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {}, [userInfo]);
  return (
    <SideDContainer show={show}>
      <SideDUl onClick={click}>
        <SideLi>
          <Link to="/">Principal</Link>
        </SideLi>
        <SideLi>
          <Link to="/cart">Servicios</Link>
        </SideLi>
        <SideLi>
          <Link to="/cart">Blog</Link>
        </SideLi>
        <SideLi>
          <Link to="/myposts">My Posts</Link>
        </SideLi>
        <SideLi>
          <Link to="/signin">
            <SignDiv>Sign in</SignDiv>
          </Link>
        </SideLi>
        <SideLi>
          <Link to="/" style={{ color: "red" }} onClick={logoutHandler}>
            Logout
          </Link>
        </SideLi>
      </SideDUl>
    </SideDContainer>
  );
};

export default SideDrawer;
