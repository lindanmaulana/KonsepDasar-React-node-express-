import { useContext, useEffect } from "react";
import { DarkMode } from "../../../../Context/DarkMode";
import Aos from "aos";
import 'aos/dist/aos.css'; 

const HeroBanner = () => {
  const {isDarkMode} = useContext(DarkMode)

  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <section
      id="hero-banner"
      className={`pt-[70px] md:pt-0 ${isDarkMode && "bg-[#000000]"}`}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center w-full h-screen px-2 lg:justify-center sm:px-0 md:flex-row ">
          <div data-aos="fade-right" data-aos-duration="1500" className="flex flex-col justify-center items-start w-full h-screen gap-y-[40px] md:gap-y-[30px] lg:gap-y-[40px]">
            <h1 className="text-[40px] sm:text-[45px] md:text-[50px] pr-2 md:pr-20 lg:pr-[50px] text-[#335DFF] font-bold leading-[40px] sm:leading-[50px] md:leading-[60px] ">
              Informatics 01, Producing Talented Engineers.
            </h1>
            <p className="text-[15.8px] sm:text-[20px] text-[#52596E] font-medium pr-[12px] md:pr-[42px] lg:pr-[142px]  ">
              Informatics 01 2023 is a place where students are directed to
              become skilled programmers. With a focus on programming and the
              latest information technology, this program prepares students to
              become experts in developing software.
            </p>
            <a
              href=""
              className="bg-[#335DFF] rounded-[8px] text-[#fcfcff] font-bold text-[18px] py-[15px] px-[40px] "
            >
              Learn more
            </a>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className="max-w-full max-h-full">
            <img
              src="/public/landingPage.svg"
              alt=""
              className="w-[450px] h-[460px] lg:w-[530px] lg:h-[530px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
