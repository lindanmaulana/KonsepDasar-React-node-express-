import HeroBanner from "../components/Fragments/Landing/Section/HeroBanner";
import MoreThan from "../components/Fragments/Landing/Section/MoreThan";
import Interested from "../components/Fragments/Landing/Section/Interested";
import LandingFooter from "../components/Fragments/Landing/Footer/LandingFooter";
import HeaderLayouts from "../components/Layouts/Landing/HeaderLayouts";
import OfferLayouts from "../components/Layouts/Landing/OfferLayouts";
import ClassLayouts from "../components/Layouts/Landing/ClassLayouts";
const LandingPage = () => {

  return (
    <>
      {/* Header */}
      <HeaderLayouts />

      {/* hero banner */}
      <HeroBanner />

      {/* offer */}
      <OfferLayouts />

      {/* departments */}
      <ClassLayouts />

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
