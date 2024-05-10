const HeaderTwo = (props) => {
  const { titleSelect, children, subject } = props;
  return (
    <div className="flex items-center justify-between w-full py-4">
      <div className="flex flex-col">
        <label htmlFor={titleSelect} className="font-semibold text-black/20">
          {" "}
          Select {titleSelect}
        </label>
        <select
          name={titleSelect}
          id={titleSelect}
          className="w-[120px] border border-black/20 font-medium rounded-md px-2"
        >
          {children}
        </select>
      </div>
      <div className="flex">
        <button className="min-w-[100px] h-full bg-[#6754B3] px-4 py-1 text-[#FFFFFF] text-sm rounded-full self-center">
          {" "}
          + Add a {subject}
        </button>
      </div>
    </div>
  );
};

export default HeaderTwo;
