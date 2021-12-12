import InfoSection from "../components/InfoSection";
import { homeObjTwo } from "../components/InfoSection/Data";
import Servicios from "../components/Servicios";

export const HomeScreen = () => {
  return (
    <div className="homescreen">
      <InfoSection {...homeObjTwo} />
      <Servicios />
    </div>
  );
};
