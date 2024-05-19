import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../../../Context/DarkMode";

const ListNavbar = (props) => {
    const {to, title} = props
    const {isDarkMode} = useContext(DarkMode)

  return (
    <li>
      <Link to={to} className={`${isDarkMode ? "text-[#808396] hover:text-[#FFFFFF]" : "text-[#808396] hover:text-[#030F4B] "} cursor-pointer`}>
        {title}
      </Link>
    </li>
  );
};

export default ListNavbar;
