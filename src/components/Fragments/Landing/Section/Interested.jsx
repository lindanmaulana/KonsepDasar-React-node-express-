import { useContext } from "react";
import { DarkMode } from "../../../../Context/DarkMode";

const Interested = () => {
  const {isDarkMode} = useContext(DarkMode)

  return (
    <section className={`pt-[120px] pb-[32px] ${isDarkMode ? "bg-[#111827]" : "bg-[#FFFFFF]"}`}>
      <div className="w-full h-[350px] bg-[url(/src/assets/images/LandingImages/interested/interested-image.jpg)] bg-cover bg-center relative">
        <div className="w-[250px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[100px] bg-white shadow-sm rounded-[6px] shadow-black/70 flex flex-wrap justify-center items-center text-center gap-x-[30px] absolute -top-[50px] right-[50%] translate-x-[50%] ">
          <h2 className="text-[16px] font-bold text-[#374BAE] ">
            Interested? lets get you started{" "}
          </h2>
          <a
            href=""
            className="bg-[#FD4455] rounded-[8px] px-[30px] py-[5px] text-[16px] font-bold text-[#FCFCFF] "
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Interested;
