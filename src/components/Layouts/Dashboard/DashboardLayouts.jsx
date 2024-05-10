import MenuDashboard from "../../Fragments/Dashboard/MenuDashboard";
import HeaderDashboard from "../../Fragments/Dashboard/HeaderDashboard";
import SideBar from "../../Fragments/Dashboard/SideBar";
import "../../../App.css";
import { useState } from "react";
const DashboardLayouts = () => {
  const [state, setStated] = useState(false);

  const handleSideBar = () => {
    setStated(!state);
  };
  return (
    <div className="flex h-screen">
      <div
        className={`z-10 ${
          state ? "w-[100px]" : "w-1/5"
        } shadow-right transition-global duration-700`}
      >
        <SideBar handleState={handleSideBar} state={state} />
      </div>

      <div className="flex-1 overflow-y-scroll bg-[#EEEEEE]">
        <HeaderDashboard />

        <MenuDashboard />
      </div>
    </div>
  );
};

export default DashboardLayouts;
