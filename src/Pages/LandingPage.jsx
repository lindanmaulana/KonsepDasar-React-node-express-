import HeroBanner from "../components/Fragments/Landing/Section/HeroBanner";
import MoreThan from "../components/Fragments/Landing/Section/MoreThan";
import Interested from "../components/Fragments/Landing/Section/Interested";
import LandingFooter from "../components/Fragments/Landing/Footer/LandingFooter";
import Offer from "../components/Fragments/Landing/Section/Offer"
import Class from "../components/Fragments/Landing/Section/Class";
import LandingHeader from "../components/Fragments/Landing/Header/LandingHeader";
import NewActivities from "../components/Fragments/Landing/Section/NewActivities";
const LandingPage = () => {
  return (
    <>
      {/* Header */}
      <LandingHeader title="Teknik Informatics" href=""/>

      {/* hero banner */}
      <HeroBanner />

      {/* offer */}
      <Offer />

      {/* departments */}
      <Class />

      {/* activities */}
      <NewActivities />

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
