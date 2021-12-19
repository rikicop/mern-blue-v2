import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import { homeObjTwo, homeObjOne } from "../components/InfoSection/Data";
import Servicios from "../components/Servicios";
/* import { useNavigate } from "react-router";
import { useEffect } from "react" */ export const HomeScreen = () => {
  /* const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/myposts");
    }
  }, [navigate]); */
  return (
    <div className="homescreen">
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Servicios />
      <Footer />
    </div>
  );
};
