const MenuBar = (props) => {
    const {titleMenu, src} = props

  return (
    <div className="w-full justify-start border-b border-slate-400 pb-2 group">
      <button className="flex gap-x-3 group-hover:w-full group-hover:py-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-all duration-500 ease-in-out">
        <img
          src={`/public/${src}`}
          alt="pending report"
          className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
        />
        <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
          {titleMenu}
        </h3>
      </button>
    </div>
  );
};

export default MenuBar;


// src="/public/dashboard/menuGrades.svg"