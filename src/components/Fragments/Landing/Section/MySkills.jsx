import { useContext, useEffect } from "react"
import { DarkMode } from "../../../../Context/DarkMode"
import ItemSkill from "../../../Elements/LandingElements/Skills/ItemSkill"
import Aos from "aos"
import "aos/dist/aos.css"

const MySkills = () => {
    const {isDarkMode} = useContext(DarkMode)
    useEffect(() => {
        Aos.init({
            // Konfigurasi AOS disini
            offset: 100, // Offset sebelum elemen memasuki viewport
            duration: 1000, // Durasi animasi
            delay: 200, // Penundaan sebelum animasi dimulai
            easing: "ease", // Easing function (misalnya 'ease', 'linear', 'ease-in-out', dsb)
          });
      }, []);
    
  return (
    <section className={`${
        isDarkMode ? "bg-[#000000]" : "bg-[#FFFFFF]"
      } w-full px-5 lg:px-0 py-10`}>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-y-8">
          <div className="self-center px-5 text-center">
            <h2 className="text-3xl font-semibold text-[#335DFF]">My Skills</h2>
            <p  className={`${
                isDarkMode ? "text-[#FFFFFF] opacity-50" : "text-slate-700"
              }  text-md`}>
              Di bagian ini keterampilan-keterampilan teknis yang saya kuasai dalam pemrograman.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center w-full gap-x-3 ">
            <ItemSkill src="html.svg" title="HTML" duration="700" />
            <ItemSkill src="css.svg" title="CSS" duration="900" />
            <ItemSkill src="javascript.svg" title="Javascript" duration="1100" />
            <ItemSkill src="tailwindCss.svg" title="TailwindCss" duration="1300" />
            <ItemSkill src="reactJs.svg" title="ReactJs" duration="1500" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MySkills
