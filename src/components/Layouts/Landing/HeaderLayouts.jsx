import { useContext } from "react";
import { DarkMode } from "../../../Context/DarkMode";
import BtnDarkMode from "../../Elements/BtnDarkMode";

const HeaderLayouts = (props) => {
  const { children } = props;

  const { isDarkMode } = useContext(DarkMode);

  return (
    <header className={`py-[21px] ${isDarkMode && "bg-[#000000]"}`}>
      <div className="w-full flex justify-between items-center fixed top-0 right-0 py-[20px] px-2 lg:px-8 z-[99]">
        {children}
      </div>
      <BtnDarkMode />
    </header>
  );
};

export default HeaderLayouts;

{
  /* <LandingHeader title="Informatika" handleLogin={handleState} state={state} loading={loading}/> */
}
