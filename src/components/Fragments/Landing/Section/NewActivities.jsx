import { useContext, useEffect, useState } from "react";
import { getDataKegiatan } from "../../../../services/dashboard.services";
import { DarkMode } from "../../../../Context/DarkMode";

const NewActivities = () => {
  const [dataKegiatan, setDataKegiatan] = useState([]);
  const {isDarkMode} = useContext(DarkMode)
  useEffect(() => {
    getDataKegiatan().then((res) => setDataKegiatan(res.payload.datas));
  }, [dataKegiatan]);

  return (
    <section className= {`${isDarkMode ? "bg-[#111827]" : "bg-[#FFFFFF]"} py-10`}>
      <div className="container">
        <div
          className={` flex-col items-start justify-center bg-[#335DFF] rounded-md ${
            dataKegiatan.length !== 0 ? "flex" : "hidden"
          }`}
        >
          <h2 className="text-3xl text-[#FFFFFF] pl-10 py-2">New Activities</h2>
          <div className="flex flex-col justify-center border gap-y-2 bg-[#FFFFFF] w-[99%] ml-auto">
            {dataKegiatan &&
              dataKegiatan.map((items) => (
                <div
                  className="flex items-center justify-between w-full px-10 py-2 rounded-md shadow-md "
                  key={items.id}
                >
                  <p className="text-[#335DFF] text-lg font-normal">
                    {items.kegiatan}
                  </p>

                  <p className="text-green-600">New</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewActivities;
