import { Link } from "react-router-dom";
import "../../../App.css";
const MenuBar = (props) => {
  const { to, icons, secondTitle, titleMenu, state } = props;

  return (
    <div className="flex items-center justify-start w-full pb-2 group">
      <Link
        to={`${to}`}
        className="flex gap-x-3 w-full group-hover:py-2 pl-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-global duration-500"
      >
        {icons && icons}
        {state ? (
          <h3 className="self-center text-[15px] group-hover:text-[#FFFFFF] text-slate-400">
            {secondTitle}
          </h3>
        ) : (
          <h3 className="self-center text-[15px] group-hover:text-[#FFFFFF] text-slate-400 ">
            {titleMenu}
          </h3>
        )}
      </Link>
    </div>
  );
};

export default MenuBar;
