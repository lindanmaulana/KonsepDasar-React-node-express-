import { useEffect, useState } from "react";
import OfferList from "../../../Elements/LandingElements/Section/OfferList";
import { getDataOffer } from "../../../../services/offer.services";

const Offer = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getDataOffer().then((res) => {
      setDatas(res);
    });
  }, []);
  return (
    <>
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
    </>
  );
};

export default Offer;
