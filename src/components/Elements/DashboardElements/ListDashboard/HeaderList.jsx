const HeaderOne = (props) => {
  const { title } = props;
  return (
      <div className="flex items-center justify-between w-full  py-4 border-b border-[#6754B3]">
        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <div>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="px-2 border border-b-[#6754B3] outline-none"
          />
        </div>
        <div className="flex gap-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
            <span className="self-center block bg-red-800 rounded-full w-7 h-7"></span>
          </div>
          <button className="px-4 py-1 text-[#FFFFFF] min-w-[50px] bg-green-500">
            Add
          </button>
        </div>
      </div>
  );
};

export default HeaderOne;
