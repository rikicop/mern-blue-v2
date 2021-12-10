import { Link } from "react-router-dom";
import { SideDContainer, SideDUl, SignDiv, SideLi } from "./SideDElements";

const SideDrawer = ({ show, click }) => {
  return (
    <SideDContainer show={show}>
      <SideDUl onClick={click}>
        <SideLi>
          <Link to="/cart">
            <span>Principal</span>
          </Link>
        </SideLi>
        <SideLi>
          <Link to="/">Servicios</Link>
        </SideLi>
        <SideLi>
          <Link to="/">Blog</Link>
        </SideLi>
        <SideLi>
          <Link to="/">Equipo</Link>
        </SideLi>
        <SideLi>
          <Link to="/">Contacto</Link>
        </SideLi>
        <SideLi>
          <Link to="/signin">
            <SignDiv>Sign in</SignDiv>
          </Link>
        </SideLi>
      </SideDUl>
    </SideDContainer>
  );
};

export default SideDrawer;
