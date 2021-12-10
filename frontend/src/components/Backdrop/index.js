import { BackdropContainer, CloseIcon, DivIcon } from "./BackdropElements";

const Backdrop = ({ show, click }) => {
  return (
    show && (
      <BackdropContainer onClick={click}>
        <DivIcon>
          <CloseIcon size={40} />
        </DivIcon>
      </BackdropContainer>
    )
  );
};

export default Backdrop;
