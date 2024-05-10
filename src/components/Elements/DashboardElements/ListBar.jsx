const ListBar = (props) => {
  const { titleList, children } = props;

  return (
    <div className="flex flex-col w-full gap-y-1">
      <h3 className="text-[16px] font-bold text-[#374BAE]  ">{titleList}</h3>
      {children}
    </div>
  );
};

export default ListBar;
