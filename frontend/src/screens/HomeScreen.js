import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import { homeObjTwo, homeObjOne } from "../components/InfoSection/Data";
import Servicios from "../components/Servicios";

export const HomeScreen = () => {
  return (
    <div className="homescreen">
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Servicios />
      <Footer />
    </div>
  );
};
