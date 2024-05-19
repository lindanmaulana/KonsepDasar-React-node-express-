import { useContext, useEffect, useState } from "react";
import OfferList from "../../../Elements/LandingElements/Section/OfferList";
import { getDataOffer } from "../../../../services/offer.services";
import OfferLayouts from "../../../Layouts/Landing/OfferLayouts";
import { DarkMode } from "../../../../Context/DarkMode";
import { MdOutlineAutoDelete } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  const [datas, setDatas] = useState([]);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    getDataOffer().then((res) => {
      setDatas(res);
    });
  }, []);

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
    <OfferLayouts bg={isDarkMode ? "bg-[#111827]" : "bg-[#FFFFFF]"}>
      {datas ? (
        datas.map((items) => (
          <OfferList
            aos="fade-up"
            key={items.id}
            title={items.offer}
            description={items.description}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <MdOutlineAutoDelete className="text-4xl text-[#335DFF]" />
          <p className="text-xl italic font-semibold text-slate-400">
            Offer not found
          </p>
        </div>
      )}
    </OfferLayouts>
  );
};

export default Offer;
