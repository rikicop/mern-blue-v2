import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";

export const HomeScreen = () => {
  return (
    <div className="homescreen">
      <InfoSection {...homeObjOne} />
    </div>
  );
};
