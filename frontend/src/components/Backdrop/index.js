import { BackdropContainer } from "./BackdropElements";

const Backdrop = ({ show, click }) => {
  return show && <BackdropContainer onClick={click} />;
};

export default Backdrop;
