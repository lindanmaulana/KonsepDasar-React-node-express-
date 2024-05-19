import LandingFooter from "../components/Fragments/Landing/Footer/LandingFooter";
import LandingHeader from "../components/Fragments/Landing/Header/LandingHeader";
import HeroAbout from "../components/Fragments/Landing/Section/HeroAbout";
import AboutMe from "../components/Fragments/Landing/Section/AboutMe";
import MySkills from "../components/Fragments/Landing/Section/MySkills";

const AboutPage = () => {
  return (
    <>
      <LandingHeader title="About Me" href="about" />
      <HeroAbout />
      <AboutMe />
      <MySkills />
      <LandingFooter />
    </>
  );
};

export default AboutPage;
