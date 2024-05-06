import { useEffect, useState } from "react";
import OfferList from "../../../Elements/LandingElements/Section/OfferList";
import { getDataOffer } from "../../../../services/offer.services";

const Offer = () => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        await getDataOffer().then((res) => {
          setDatas(res);
        });
      } catch (err) {
        setError(err);
      }
    };
    fetch();
  }, []);

  console.log(datas);
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
          <h2>Terjadi kesalahan Page error {error}</h2>
        </div>
      )}
    </>
  );
};

export default Offer;
