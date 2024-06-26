import Kampus2 from "../Iframe/Kampus2";
import { SlPeople } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import { useContext } from "react";
import { DarkMode } from "../../../../Context/DarkMode";
const MoreThan = () => {
  const {isDarkMode} = useContext(DarkMode)
  
  return (
    <section id="more-than" className={`pt-[40px] md:pt-[67px] pb-[40px] md:pb-[120px]  ${isDarkMode ? "bg-[#111827]" : "bg-[#FFFFFF]"}`}>
      <div className="container">
        <h2 className="text-[30px] px-[50px] lg:text-[40px] mb-[20px] font-bold text-center text-[#335DFF] leading-tight lg:mb-[10px] lg:px-[263px]">
          More than 1.000 students has enrolled this year
        </h2>
        <div className="w-full flex justify-center items-center mb-[40px] px-2">
          <Kampus2 />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-[40px] lg:gap-x-[180px]">
          <div className="bg-[#335DFF] rounded-sm pl-5 pr-10 py-[10px] flex justify-center items-center gap-x-[8px] shadow-md shadow-[#335DFF]">
            <SlPeople className="w-[35px] h-[35px] self-center bg-white p-2.5 text-[#335DFF] rounded-sm" />
            <div>
              <h3 className="text-[12px] font-bold text-[#91A7FF]">Students</h3>
              <p className="text-[15px] font-bold text-[#FCFCFF] ">150.000+</p>
            </div>
          </div>

          <div className="bg-[#FD4455] rounded-sm pl-5 pr-10 py-[10px] flex justify-center items-center gap-x-[8px] shadow-md shadow-[#FD4455]">
            <CiClock2 className="w-[35px] h-[35px] self-center bg-white p-2.5 text-[#FD4455] rounded-sm" />
            <div>
              <h3 className="text-[12px] font-bold text-[#FCEDEF]">
                Times Zones
              </h3>
              <p className="text-[15px] font-bold text-[#FCFCFF] ">10+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThan;
