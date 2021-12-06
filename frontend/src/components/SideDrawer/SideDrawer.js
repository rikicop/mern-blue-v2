import { Link } from "react-router-dom";
import { SideDContainer, SideDLinks, SignDiv } from "./SideDElements";

const SideDrawer = ({ show, click }) => {
  return (
    <SideDContainer show={show}>
      <SideDLinks onClick={click}>
        <li>
          <Link to="/cart">
            <span>Principal</span>
          </Link>
        </li>
        <li>
          <Link to="/">Servicios</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Equipo</Link>
        </li>
        <li>
          <Link to="/">Contacto</Link>
        </li>
        <li>
          <Link to="/signin">
            <SignDiv>Sign in</SignDiv>
          </Link>
        </li>
      </SideDLinks>
    </SideDContainer>
  );
};

export default SideDrawer;
