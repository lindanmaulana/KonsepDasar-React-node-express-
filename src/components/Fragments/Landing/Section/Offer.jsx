import { useContext, useEffect, useState } from "react";
import OfferList from "../../../Elements/LandingElements/Section/OfferList";
import { getDataOffer } from "../../../../services/offer.services";
import OfferLayouts from "../../../Layouts/Landing/OfferLayouts";
import { DarkMode } from "../../../../Context/DarkMode";

const Offer = () => {
  const [datas, setDatas] = useState([]);
  const {isDarkMode} = useContext(DarkMode)

  useEffect(() => {
    getDataOffer().then((res) => {
      setDatas(res);
    });
  }, []);
  return (
    <OfferLayouts bg={isDarkMode && "bg-slate-900"}>
      {datas ? (
        datas.map((items) => (
          <OfferList
            key={items.id}
            title={items.offer}
            description={items.description}
          />
        ))
      ) : (
        <div>
          <h2>Terjadi kesalahan Data kosong</h2>
        </div>
      )}
    </OfferLayouts>
  );
};

export default Offer;
