const AddData = () => {
  return (
    <div className="w-[50%] bg-[#FFFFFF] rounded-md">
      <div className="flex flex-col p-2 gap-y-4">
        <div className="flex items-center justify-start w-full px-4 py-2 gap-x-2">
          <div className="flex flex-col w-1/5 gap-y-2">
            <label htmlFor="nama" className="p-1 border-2 rounded-sm">
              Nama
            </label>
            <label htmlFor="" className="p-1 border-2 rounded-sm">
              Asal desa
            </label>
            <label htmlFor="" className="p-1 border-2 rounded-sm">
              Asal kota
            </label>
          </div>
          <div className="flex flex-col w-full gap-y-2">
            <input
              type="text"
              className="p-1 px-4 border-2 rounded-sm outline-none"
              id="nama"
              placeholder="Nama"
            />
            <input
              type="text"
              className="p-1 px-4 border-2 rounded-sm outline-none"
              placeholder="Asal Desa"
            />
            <input
              type="text"
              className="p-1 px-4 border-2 rounded-sm outline-none"
              placeholder="Asal Kota"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <button className="bg-[#eee] px-4 py-1 rounded-sm text-slate-700">
            Cancel
          </button>
          <button className="bg-[#374BAE] px-4 py-1 text-[#FFFFFF] rounded-sm">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddData;
