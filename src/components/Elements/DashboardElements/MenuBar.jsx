import { Link } from "react-router-dom";

const MenuBar = (props) => {
    const {href, titleMenu, src} = props


  return (
    <div className="justify-start w-full pb-2 border-b border-slate-400 group">
      <Link to={`/${href}`} className="flex gap-x-3 group-hover:w-full group-hover:py-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-all duration-500 ease-in-out">
        <img
          src={`/public/${src}`}
          alt="pending report"
          className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
        />
        <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
          {titleMenu}
        </h3>
      </Link>
    </div>
  );
};

export default MenuBar;


// src="/public/dashboard/menuGrades.svg"