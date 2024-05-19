import { useContext, useEffect } from "react"
import { DarkMode } from "../../../../Context/DarkMode"
import Aos from "aos";
import "aos/dist/aos.css"

const HeroAbout = () => {
    const {isDarkMode} = useContext(DarkMode)
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <section className={` ${isDarkMode && "bg-[#000000]"}`}>
        <div className="container">
          <div className="flex flex-col items-center justify-center w-full h-screen px-5 lg:px-0 lg:flex-row">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="flex flex-col items-start justify-center w-full h-full pr-10 lg:w-1/2 gap-y-4"
            >
              <h3 className="text-[#335DFF] text-xl font-semibold">
                Hello, Wellcome
              </h3>
              <h2
                className={`${
                  isDarkMode ? "text-[#FFFFFF]" : "text-[#335DFF]"
                } text-2xl sm:text-[30px] md:text-[25px] lg:text-[50px] font-bold`}
              >
                I M Lindan Maulana
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-[#FFFFFF] opacity-50" : "text-slate-700"
                }  text-md`}
              >
                Interested in web development with JavaScript, I focus on
                creating interactive experiences that engage users. With deep
                knowledge in HTML, CSS, and JavaScript, I enjoy exploring
                various technologies to create innovative web solutions. Through
                this portfolio, I share my works and hope to contribute to
                exciting projects in the future.
              </p>
              <a
                href=""
                className="bg-[#335DFF] px-3 py-1 rounded-md text-[#FFFFFF]"
              >
                Contact us
              </a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex items-center justify-center w-full h-full lg:w-1/2"
            >
              <div className=" w-[420px] h-[380px] mx-auto bg-[#FFFFFF] rounded-lg overflow-hidden shadow-lg shadow-black/60">
                <img
                  src="/src/assets/images/lindanmaulana.jpg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroAbout
