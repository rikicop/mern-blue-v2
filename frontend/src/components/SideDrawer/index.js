import { Link } from "react-router-dom";
import { SideDContainer, SideDUl, SignDiv, SideLi } from "./SideDElements";

const SideDrawer = ({ show, click }) => {
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
          <Link to="/logout" style={{ color: "red" }}>
            Logout
          </Link>
        </SideLi>
      </SideDUl>
    </SideDContainer>
  );
};

export default SideDrawer;
