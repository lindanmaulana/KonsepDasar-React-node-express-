const MenuContent = (props) => {
  const { amount, title, description, src } = props;
  return (
    <div className="w-[300px] h-[160px] bg-[#FFFFFF] flex p-[30px] rounded-[20px]">
      <div className="w-[200px] flex flex-col">
        <h2 className="text-[20px] font-extrabold text-[#5867DD] ">{amount}</h2>
        <h3 className="text-[15px] font-extrabold text-[#000000]  ">{title}</h3>
        <p className="text-[10px] text-[#000000] ">{description}</p>
      </div>
      <div className="w-[100px] flex">
        <img
          src={`../../public/${src}`}
          alt="subGroups"
          className="self-center"
        />
      </div>
    </div>
  );
};

export default MenuContent;
