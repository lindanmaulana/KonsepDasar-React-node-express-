import "../../App.css";
import LandingHeader from "../../components/Fragments/Landing/Header/LandingHeader";
import HeroBanner from "../../components/Fragments/Landing/Section/HeroBanner";
import Offer from "../../components/Fragments/Landing/Section/Offer";
import Departments from "../../components/Fragments/Landing/Section/Departments";
import MoreThan from "../../components/Fragments/Landing/Section/MoreThan";
import Interested from "../../components/Fragments/Landing/Section/Interested";
import LandingFooter from "../../components/Fragments/Landing/Footer/LandingFooter";
const LandingPage = () => {
  return (
    <>
    <LandingHeader />

      {/* hero banner */}
      <HeroBanner />

      {/* offer */}
     <Offer />

      {/* departments */}
      <Departments />

      {/* more than */}
      <MoreThan />

      {/* interested */}
      <Interested />

      {/* footer landing page */}
      <LandingFooter />
    </>
  );
};

export default LandingPage;
