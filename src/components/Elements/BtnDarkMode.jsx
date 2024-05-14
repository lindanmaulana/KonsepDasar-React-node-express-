import { useContext } from "react";
import { DarkMode } from "../../Context/DarkMode";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
const BtnDarkMode = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log([isDarkMode]);
  return (
    <button
      className="fixed p-4 bg-blue-400 bottom-5 right-2 z-[999] rounded-full "
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode className="text-white "/>}
    </button>
  );
};

export default BtnDarkMode;
