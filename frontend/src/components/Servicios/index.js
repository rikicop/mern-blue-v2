import React from "react";
import Icon1 from "../../images/svg-2.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-4.svg";
import {
  OverlayDescription,
  OverlayTitle,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  Overlay,
  ServicesP,
  ServicesWrapper,
} from "./ServiciosElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="servicios">
        <ServicesH1>Publicaciones</ServicesH1>
        <ServicesWrapper>
          {/* <ServicesLink> */}
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce Gastos</ServicesH2>
            <ServicesP>
              Te ayudamos con tus finanzas y a aumentar tus ganancias
            </ServicesP>
            <Overlay>
              <OverlayTitle>Brick</OverlayTitle>
              <OverlayDescription>
                Here we have a Brick Wall...
              </OverlayDescription>
            </Overlay>
          </ServicesCard>
          {/*  </ServicesLink> */}
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Oficinas Virtuales</ServicesH2>
            <ServicesP>
              Accede a nuestra paltaforma online desde cualquier parte del mundo
            </ServicesP>
            <Overlay>
              <OverlayTitle>Brick</OverlayTitle>
              <OverlayDescription>
                Here we have a Brick Wall...
              </OverlayDescription>
            </Overlay>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>
              Los Orgullos y Robustos Tomates verdes Fritos
            </ServicesH2>
            <ServicesP>
              Te ayudamos con tus finanzas y a aumentar tus ganancias
            </ServicesP>
            <Overlay>
              <OverlayTitle>Brick</OverlayTitle>
              <OverlayDescription>
                Here we have a Brick Wall...
              </OverlayDescription>
            </Overlay>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
