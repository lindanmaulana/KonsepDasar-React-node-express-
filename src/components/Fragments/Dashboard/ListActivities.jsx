import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  deleteDataKegiatan,
  getDataKegiatan,
  sendDataKegiatan,
} from "../../../services/dashboard.services";

const ListActivities = () => {
  const [dataKegiatan, setDataKegiatan] = useState([]);
  const [dataInputKegiatan, setDataInputKegiatan] = useState("");
  
  useEffect(() => {
    getDataKegiatan().then((res) => setDataKegiatan(res.payload.datas));
  }, [dataKegiatan]);

  
  const handleInputKegiatan = (event) => {
    setDataInputKegiatan(event.target.value);
  };

  const sendData = async (data) => {
    await sendDataKegiatan(data);
  };
  
  const deleteData = async(data) => {
    await deleteDataKegiatan(data)
  }

  const handleSendKegiatan = () => {
    const dataIn = {
      kegiatan: dataInputKegiatan,
    };

    sendData(dataIn);
  };
  
  const handleDeleteKegiatan = (id) => {
    const dataIn = {
      id: id
    }

    deleteData(dataIn)
  }

  return (
    <div className="flex flex-col w-full pt-5 gap-y-3">
      <div className="flex justify-between py-4">
        <h2 className="text-lg font-semibold tracking-tighter text-slate-600">
          Daftar Kegiatan
        </h2>
        <div className="flex gap-x-4">
          <input
            type="text"
            name="kegiatan"
            placeholder="Input Kegiatan"
            onChange={handleInputKegiatan}
            className="pl-3 outline-[#374BAE]"
          />
          <button
            className="bg-[#374BAE] opacity-50 px-3 py-1 rounded-md text-[#FFFFFF] hover:opacity-100"
            onClick={handleSendKegiatan}
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between w-full h-full ">
        <div className="flex flex-col w-full h-full gap-y-2">
          {dataKegiatan ? (
            dataKegiatan.map((items) => (
              <div
                className="flex items-center justify-between px-10 py-2 rounded-md shadow-md bg-[#374BAE]"
                key={items.id}
              >
                <p className="text-[#FFFFFF] text-lg font-normal">
                  {items.kegiatan}
                </p>
                <button className="p-2 text-[#FFFFFF] text-xl bg-slate-400 rounded-md group" onClick={() => handleDeleteKegiatan(items.id)}>
                  <RiDeleteBin5Line className="group-hover:text-red-700"/>
                </button>
              </div>
            ))
          ) : (
            <p>data kosong</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListActivities;
