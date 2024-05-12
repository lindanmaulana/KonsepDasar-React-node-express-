import HeroBanner from "../components/Fragments/Landing/Section/HeroBanner";
import MoreThan from "../components/Fragments/Landing/Section/MoreThan";
import Interested from "../components/Fragments/Landing/Section/Interested";
import LandingFooter from "../components/Fragments/Landing/Footer/LandingFooter";
import HeaderLayouts from "../components/Layouts/Landing/HeaderLayouts";
import Offer from "../components/Fragments/Landing/Section/Offer"
import Class from "../components/Fragments/Landing/Section/Class";
import LandingHeader from "../components/Fragments/Landing/Header/LandingHeader";
const LandingPage = () => {

  return (
    <>
      {/* Header */}
      <LandingHeader title="Teknik Informatics"/>

      {/* hero banner */}
      <HeroBanner />

      {/* offer */}
      <Offer />

      {/* departments */}
      <Class />

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
