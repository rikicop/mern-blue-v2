import { Link } from "react-router-dom";
import { SideDContainer, SideDLinks, SideDCBadge } from "./SideDElements";

const SideDrawer = ({ show, click }) => {
  return (
    <SideDContainer show={show}>
      <SideDLinks onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <SideDCBadge>0</SideDCBadge>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </SideDLinks>
    </SideDContainer>
  );
};

export default SideDrawer;
