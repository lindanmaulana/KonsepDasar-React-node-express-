import { IoQrCodeOutline } from "react-icons/io5";
import ListBar from "../../Elements/DashboardElements/ListBar";
import MenuBar from "../../Elements/DashboardElements/MenuBar";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 gap-y-4">
      {/* HEADER */}
      <div className="flex items-center justify-center w-full">
        <img src="../../public/dashboard/dashboardMenu.svg" alt="dashboard" />
      </div>

      {/* HERO BAR */}
      <div className="justify-start w-full pb-2 border-b border-slate-400 group">
        <button className="flex gap-x-3 w-full py-2 rounded-xl my-auto bg-[#374BAE] scale-105 px-3">
          <IoQrCodeOutline className="self-center text-white scale-125" />
          <h2 className="text-[18px] text-[#FFFFFF]">Dashboard</h2>
        </button>
      </div>

      {/* LIST BAR */}
      <ListBar titleList="REPORTS">
        <MenuBar
          src="dashboard/reportsPending.svg"
          titleMenu="Pending Reports"
        />
        <MenuBar
          src="dashboard/reportsSubmitted.svg"
          titleMenu="Submitted Reports"
        />
      </ListBar>

      <ListBar titleList="CLIENTS">
        <MenuBar
          src="dashboard/clientsView.svg"
          titleMenu="View / Add Groups"
        />
      </ListBar>

      <ListBar titleList="DATASET">
        <MenuBar
          src="dashboard/datasetEntity.svg"
          titleMenu="1. Entity Types"
        />
        <MenuBar src="dashboard/datasetPackages.svg" titleMenu="2. Packages" />
        <MenuBar
          src="dashboard/datasetChange.svg"
          titleMenu="Change Password"
        />
        <MenuBar src="dashboard/datasetSign.svg" titleMenu="Sign Out" href="" />
      </ListBar>
    </div>
  );
};

export default SideBar;
