import { useContext, useEffect } from "react";
import { DarkMode } from "../../../../Context/DarkMode";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const { isDarkMode } = useContext(DarkMode);
  useEffect(() => {
    Aos.init({
      // Konfigurasi AOS disini
      offset: 200, // Offset sebelum elemen memasuki viewport
      duration: 1000, // Durasi animasi
      delay: 200, // Penundaan sebelum animasi dimulai
      easing: "ease", // Easing function (misalnya 'ease', 'linear', 'ease-in-out', dsb)
    });
  }, []);
  return (
    <section
      className={`${
        isDarkMode ? "bg-[#111827]" : "bg-[#eee]"
      } w-full h-screen px-5 lg:px-0`}
    >
      <div className="container">
        <div className="flex flex-col-reverse items-center justify-center h-screen px-5 lg:px-0 lg:flex-row">
          <div
            data-aos="fade-right"
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
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="flex flex-col items-start justify-center w-full h-full pr-10 lg:w-1/2 gap-y-4"
          >
            <h3
              className={`${
                isDarkMode ? "text-[#FFFFFF]" : "text-[#335DFF]"
              } text-3xl font-semibold`}
            >
              About <span className="text-[#335DFF]">Me</span>
            </h3>
            <p
              className={`${
                isDarkMode ? "text-[#FFFFFF] opacity-50" : "text-slate-700"
              }  text-md`}
            >
              Interested in web development using JavaScript, I am a passionate
              programmer who strives to create innovative and engaging
              solutions. With skills in HTML, CSS, and JavaScript, I aim to
              continuously learn and grow in the programming world
            </p>
            <div className="flex justify-between w-full">
              <a
                href=""
                className="bg-[#335DFF] px-3 py-1 rounded-md text-[#FFFFFF] self-center"
              >
                Contact us
              </a>

              <div className="flex self-center gap-x-2">
                <Link
                  to="https://www.instagram.com/qqqqmln"
                  className="text-2xl text-slate-400 transition-global duration-300 hover:text-[#833AB4]"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://facebook.com/qqqqmln"
                  className="text-2xl text-slate-400 transition-global duration-300 hover:text-[#1877F2]"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to=""
                  className="text-2xl text-slate-400 transition-global duration-300 hover:text-[#25D366]"
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
