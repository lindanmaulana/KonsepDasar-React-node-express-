import HeroBanner from "../../components/Fragments/Landing/Section/HeroBanner";
import Offer from "../../components/Fragments/Landing/Section/Offer";
import Departments from "../../components/Fragments/Landing/Section/Departments";
import MoreThan from "../../components/Fragments/Landing/Section/MoreThan";
import Interested from "../../components/Fragments/Landing/Section/Interested";
import LandingFooter from "../../components/Fragments/Landing/Footer/LandingFooter";
import HeaderLayouts from "../../components/Layouts/Landing/HeaderLayouts";
const LandingPage = () => {
  console.log(document.documentElement.clientWidth);
  return (
    <>
      {/* Header */}
      <HeaderLayouts />

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
